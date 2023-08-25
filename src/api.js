/* fca5a49483f1418d9c8193621231907 */
/* http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */
//just need to use "forcast" for now, until other information is needed. 
async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=5');
    const weatherData = await response.json();

    //switch to "return weatherData" when seperating modules
    currentInfo(weatherData);
    const tester = new DOMInfo();
    tester.displayForecastInfo(weatherData);
};

getWeatherCast(20001);


//DOM funtions
function currentInfo(weatherData) {
    console.log(weatherData)
   // if/then for celcius
    const forecastDiv = document.getElementById('forecast');
    const temperatureDiv = document.getElementById('temperature');
    const descriptionDiv = document.getElementById('description');
    
    temperatureDiv.textContent = `Temp: ${weatherData.current.temp_f}`
    descriptionDiv.textContent = `Description: ${weatherData.current.condition.text}`

    let runner = temperatureDiv.textContent;
    console.log(typeof weatherData.current.temp_c); 
    }



    function minTemps(){
        const todayMinDiv = document.getElementById('today_min');
        const tomorrowMinDiv = document.getElementById('tomorrow_min');
        const datMinDiv = document.getElementById('dat_min');
        

    };


    class DOMInfo{
        constructor(){
            
            this.todayMinDiv = document.getElementById('today_min');
            this.tomorrowMinDiv = document.getElementById('tomorrow_min');
            this.datMinDiv = document.getElementById('dat_min');

            this.todayMaxDiv = document.getElementById('today_max');
            this.tomorrowMaxDiv = document.getElementById('tomorrow_max');
            this.datMaxDiv = document.getElementById('dat_max');
        }
        
        displayForecastInfo(weatherData){
            this.todayMinDiv.textContent = weatherData.forecast.forecastday[0].day.mintemp_f;
            this.tomorrowMinDiv.textContent = weatherData.forecast.forecastday[1].day.mintemp_f;
            this.datMinDiv.textContent = weatherData.forecast.forecastday[2].day.mintemp_f;

            this.todayMaxDiv.textContent = weatherData.forecast.forecastday[0].day.maxtemp_f;
            this.tomorrowMaxDiv.textContent = weatherData.forecast.forecastday[1].day.maxtemp_f;
            this.datMaxDiv.textContent = weatherData.forecast.forecastday[2].day.maxtemp_f;
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
    //getWeatherCast("phoenix", 'http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q='); //change to search bar function/EIN

    //api page? index maybe
    //div creation -- might not use
    function createDiv(...weatherDivs) {
        for(let i = 0; i < weatherDivs.length; i++) {
            let result = document.createElement('div');
            result.classList.add(weatherDivs[i]);
            forecast.appendChild(result);
        }
    }