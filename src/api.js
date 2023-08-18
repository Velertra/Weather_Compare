/* fca5a49483f1418d9c8193621231907 */
/* 
http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */

//just need to use "forcast" for now, until other information is needed. 
async function getWeatherCast(location) {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json' + '?key=fca5a49483f1418d9c8193621231907&q=' + location + '&days=2');
    const weatherData = await response.json();
    //const result = weatherData.current.temp_f;
    //const needed = weatherData.current;
    findInfo(weatherData)
}

getWeatherCast('phoenix', 'http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q='); //change to search bar function/EIN


async function trialGetWeather(fetchVariable) {
    const response = await fetch(fetchVariable);
    const weatherData = await response.json();
}


//make function that creates fetchVarible with the url, location and if it needs more.



function findInfo(tester) {
    console.log(tester);
    console.log(tester.forecast)

    let container = document.createElement("info_container");
    container.setAttribute("id", "info_container");     //move into seperate function that takes in the name and location(site_container)
    site_container.appendChild(container);

    //create Divs for array "forecastday" set the along as a color
    }