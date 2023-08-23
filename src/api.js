/* fca5a49483f1418d9c8193621231907 */
/* 
http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */



//NOTES
//make function that creates fetch Varible with the url, location and if it needs more.


    //either create the divs with a function for each piece of information you want to display or set up the divs

    //also find information from previous day if you still want to show comparisons

    // after you add the hourly forecast or the other days start working on the CSS




//just need to use "forcast" for now, until other information is needed. 
async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=2');
    const weatherData = await response.json();
    //const result = weatherData.current.temp_f;
    //const needed = weatherData.current;
    findInfo(weatherData)
}


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
   
   //createDiv(runner);
    

    //create Divs for array "forecastday" set the along as a color
    }

    //function that lets the user pick location - delete- try again. 

   
    function locationSearch() {
        let locationBox = document.getElementById("location_box");      //decide if youre
        
        locationBox.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
              e.preventDefault();
              getWeatherCast(locationBox.value, 'http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q='); //change to search bar function/EIN
              locationBox.value = '';
            }
          });
    }
    
    locationSearch()
     
    //getWeatherCast("phoenix", 'http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q='); //change to search bar function/EIN



    //div creation 

    function createDiv(...weatherDivs) {

        for(let i = 0; i < weatherDivs.length; i++) {
            //needs a line of code that deletes forecast of created divs before putting new ones

            let result = document.createElement('div');
            result.classList.add(weatherDivs[i]);
            forecast.appendChild(result);
        }

       /*  let information = {}
        information + weatherDivs;
        console.log(information); */
    }

 


    //createDiv('dontworkthere' , 'yoyoyoma'/*, 'check for cash' */);