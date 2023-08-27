/* fca5a49483f1418d9c8193621231907 */
/* http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */
//just need to use "forcast" for now, until other information is needed. 
async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=5');
    const weatherData = await response.json();

    //switch to "return weatherData" when seperating modules
    console.log(weatherData);
    console.log(weatherData.forecast.forecastday[0].date)
    const tester = new DOMInfo();
    tester.displayCurrentInfo(weatherData);
    tester.displayForecastInfo(weatherData);
    tester.displayWeekdays(weatherData);
};

getWeatherCast(20001);


    class DOMInfo{
        constructor(){
            //Current
            this.locationDiv = document.getElementById('location');
            this.dateDiv = document.getElementById('date');
            this.timeDiv = document.getElementById('time');
            this.forecastDiv = document.getElementById('forecast');
            this.temperatureDiv = document.getElementById('temperature');
            this.descriptionDiv = document.getElementById('description');
            //Min
            this.todayMinDiv = document.getElementById('today_min');
            this.tomorrowMinDiv = document.getElementById('tomorrow_min');
            this.datMinDiv = document.getElementById('dat_min');
            //Max
            this.todayMaxDiv = document.getElementById('today_max');
            this.tomorrowMaxDiv = document.getElementById('tomorrow_max');
            this.datMaxDiv = document.getElementById('dat_max');
            //Weekdays
            this.dayTwo = document.getElementById('day_two');
            this.dayThree = document.getElementById('day_three')
        }
        displayCurrentInfo(weatherData){
            this.locationDiv.textContent = weatherData.location.name;
            this.dateDiv.textContent = new Date(weatherData.forecast.forecastday[0].date).toDateString().substring(0, 18);
            this.timeDiv.textContent = new Date(weatherData.location.localtime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });;
            this.temperatureDiv.textContent = `Temp: ${weatherData.current.temp_f}`;
            this.descriptionDiv.textContent = `Description: ${weatherData.current.condition.text}`;
            this.forecastDiv.textContent = `Min: ${weatherData.forecast.forecastday[0].day.mintemp_f} Max: ${weatherData.forecast.forecastday[0].day.maxtemp_f}`;
            
        }
        displayForecastInfo(weatherData){
            //Min
            this.todayMinDiv.textContent = weatherData.forecast.forecastday[0].day.mintemp_f;
            this.tomorrowMinDiv.textContent = weatherData.forecast.forecastday[1].day.mintemp_f;
            this.datMinDiv.textContent = weatherData.forecast.forecastday[2].day.mintemp_f;
            //Max
            this.todayMaxDiv.textContent = weatherData.forecast.forecastday[0].day.maxtemp_f;
            this.tomorrowMaxDiv.textContent = weatherData.forecast.forecastday[1].day.maxtemp_f;
            this.datMaxDiv.textContent = weatherData.forecast.forecastday[2].day.maxtemp_f;
        }
        displayWeekdays(weatherData){
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let todaysDate = new Date(weatherData.forecast.forecastday[0].date);
            //let tomorrow = todaysDate.setDate(todaysDate.getDate() + 1);
          
            console.log(typeof todaysDate)
            
        }
    }

    //index
    //function that lets the user pick location      
    function locationSearch() {
        let locationBox = document.getElementById("location_box");      
        locationBox.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
              e.preventDefault();
              getWeatherCast(locationBox.value); 
              locationBox.value = '';
            }
          });
    };    
    locationSearch()
