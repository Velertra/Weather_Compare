/* fca5a49483f1418d9c8193621231907 */
/* http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */
//just need to use "forcast" for now, until other information is needed. 
async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=5');
    const weatherData = await response.json();
    //const result = weatherData.current.temp_f;
    //const needed = weatherData.current;
    findInfo(weatherData)
};

getWeatherCast(20001);


//Find the info within JSON
function findInfo(weatherData) {
    console.log(weatherData)
   
    const forecastDiv = document.getElementById('forecast');
    const temperatureDiv = document.getElementById('temperature');
    const descriptionDiv = document.getElementById('description');
    
    temperatureDiv.textContent = `Temp: ${weatherData.current.temp_f}`
    descriptionDiv.textContent = `Description: ${weatherData.current.condition.text}`

    let runner = temperatureDiv.textContent;
    console.log(typeof weatherData.current.temp_c); 
    }

    //function that lets the user pick location -     
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
    
  //  locationSearch()
    //getWeatherCast("phoenix", 'http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q='); //change to search bar function/EIN



    //div creation -- might not use

    function createDiv(...weatherDivs) {

        for(let i = 0; i < weatherDivs.length; i++) {
            

            let result = document.createElement('div');
            result.classList.add(weatherDivs[i]);
            forecast.appendChild(result);
        }
    }