/* fca5a49483f1418d9c8193621231907 */
/* http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */
//just need to use "forcast" for now, until other information is needed. 

    let switchLetter = 'f';

async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=5');
    const weatherData = await response.json();

    //switch to "return weatherData" when seperating modules
    console.log(weatherData);
    console.log(weatherData.forecast.forecastday[0].date)
    //let makeString = weatherData.toString();
    const tester = new DOMInfo();
    tester.displayCurrentInfo(weatherData);
    tester.dispaySearchInfo(weatherData)
    tester.displayForecastInfo(weatherData);
   
    tester.displayWeekdays(weatherData)

    switchTemp(weatherData)
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
            //SearchDiv
            this.feelLikeDiv = document.getElementById('feels_like');
            this.humidityDiv = document.getElementById('humidity');
            this.windSpeedDiv = document.getElementById('wind_speed');
            this.rainChanceDiv = document.getElementById('rain_chance');
            this.sunriseDiv = document.getElementById('sunrise');
            this.sunsetDiv = document.getElementById('sunset')
            //Min
            this.todayMinDiv = document.getElementById('today_min');
            this.tomorrowMinDiv = document.getElementById('tomorrow_min');
            this.datMinDiv = document.getElementById('dat_min');
            //Max
            this.todayMaxDiv = document.getElementById('today_max');
            this.tomorrowMaxDiv = document.getElementById('tomorrow_max');
            this.datMaxDiv = document.getElementById('dat_max');
            //Weekdays
            this.switchTempDiv = document.getElementById('switch_temperature');
            this.dayTwo = document.getElementById('day_two');
            this.dayThree = document.getElementById('day_three')
        }
        displayCurrentInfo(weatherData){
            //this.time = new Date(weatherData.location.localtime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });;

            this.locationDiv.textContent = weatherData.location.name;
            this.dateDiv.textContent = new Date(weatherData.forecast.forecastday[0].date).toDateString().substring(0, 11);
            this.timeDiv.textContent = new Date(weatherData.location.localtime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
            this.temperatureDiv.textContent = `${weatherData.current.temp_f}°`;
            this.descriptionDiv.textContent = `${weatherData.current.condition.text}`;
            this.forecastDiv.textContent = `${weatherData.forecast.forecastday[0].day.mintemp_f}°/${weatherData.forecast.forecastday[0].day.maxtemp_f}°`;
            
        }
        dispaySearchInfo(weatherData){
            this.feelLikeDiv.innerHTML = `${weatherData.current.feelslike_f}°<span class="labels_in_search">Feels Like:</span><br>`;
            this.humidityDiv.innerHTML = `${weatherData.current.humidity}%<span class="labels_in_search">Humidity:</span><br>`;
            this.windSpeedDiv.innerHTML = `${weatherData.current.wind_mph}mph<span class="labels_in_search">Wind Speed:</span><br>`;
            this.rainChanceDiv.innerHTML = `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%<span class="labels_in_search">Chance Of Rain:</span><br>`;
            this.sunriseDiv.innerHTML = `<span class="labels_in_search">Sunrise:</span><br>${weatherData.forecast.forecastday[0].astro.sunrise}`;
            this.sunsetDiv.innerHTML = `<span class="labels_in_search">Sunset:</span><br>${weatherData.forecast.forecastday[0].astro.sunset}`;
        }
        displayForecastInfo(weatherData){
            //Min
            this.todayMinDiv.textContent = weatherData.forecast.forecastday[0].day.mintemp_f;
            this.tomorrowMinDiv.textContent = weatherData.forecast.forecastday[1].day.mintemp_f;
            this.datMinDiv.textContent = weatherData.forecast.forecastday[2].day.mintemp_f;
            //Max
            this.todayMaxDiv.textContent = weatherData.forecast.forecastday[0].day.maxtemp_f;
            this.tomorrowMaxDiv.textContent = weatherData.forecast.forecastday[1].day.maxtemp_f
            this.datMaxDiv.innerHTML = weatherData.forecast.forecastday[2].day[`maxtemp_${switchLetter}`]
        }
        displayWeekdays(weatherData){
            let todaysDate = new Date(weatherData.location.localtime);
            
            //this.switchTempDiv.textContent = 
            this.dayTwo.textContent = new Date(todaysDate.setDate(todaysDate.getDate() + 1)).toString().substring(0, 4);
            this.dayThree.textContent = new Date(todaysDate.setDate(todaysDate.getDate() + 2)).toString().substring(0, 4);
        }
        DomStyling(){
            
        }
        tempertureSwitch(){

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

    function switchTemp(weatherData){
        let switchBtn = document.getElementById("switch_temperature");
        switchBtn.addEventListener('click', function(e){
            
            if(switchBtn.textContent.includes('f')){
                switchBtn.textContent = 'c';
                switchLetter = "c";
                console.log(switchLetter)
                getWeatherCast(weatherData.location.name)
            } else {
                switchBtn.textContent = 'f';
                switchLetter = "f";
                getWeatherCast(weatherData.location.name)
            }
        })
    }