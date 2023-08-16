/* fca5a49483f1418d9c8193621231907 */
/* 
http://api.weatherapi.com/v1/current.json?key=fca5a49483f1418d9c8193621231907&q=London */


async function getWeatherCast(location, url) {
    const response = await fetch(url + location + '&days=2');
    const weatherData = await response.json();
    const result = weatherData.current.temp_f;
    const needed = weatherData.current;
    console.log(result);
    console.log(weatherData);
}




//let searchBox = document.getElementsByName("location-box").value;
//let enterBtnSB = document.

/*  searchBox.addEventListener('keydown', (e) => {
    if(e.key === 'enter'){
        console.log(e)
    }
}) 

const locationBox = document.getElementsByClassName("location-box");

const testing = window.addEventListener() */

/* window.addEventListener("keydown", function(e){
    if (e.key === "Enter" && e.target === input#location-box.location-box) {
        console.log("got it!")
    }
})  */

/* const dammitWork = document.getElementById("#location-box");

dammitWork.addEventListener("keydown", function(e){
    if (e.key === "Enter" || e.keyCode === 13) {
        console.log("checkers")
    }
}) */

/* window.addEventListener("keydown", function(e) {
    console.log(e);
}) */

//console.log(searchBox)
getWeatherCast('phoenix', 'http://api.weatherapi.com/v1/forecast.json?key=fca5a49483f1418d9c8193621231907&q=');