// 2 fetch requests
// 1. Search by city name to get lat and lon values
// https://openweathermap.org/api/geocoding-api

// 2. Use lon/lat from first request to get weather
// https://openweathermap.org/api

const API_KEY = "2f79d354118140a37bb6982e94319d26";

var cityInput = document.querySelector("#search-city");
const cityNameEl = document.querySelector("#city-name");
const searchButton = document.querySelector('#search-button');

var today = moment();
$("#date").text(today.format('(L)'))


function getWeatherData(event){
    event.preventDefault();
    
    const cityName = cityInput.value;
    const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=2f79d354118140a37bb6982e94319d26`;

    $("#date").text(cityName + " " +$("#date").text())

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); 
        console.log(data[0].lat);  
        console.log(data[0].lon); 

        const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=2f79d354118140a37bb6982e94319d26`;
        
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // console.log(data[].)
        })
    })
}


searchButton.addEventListener("click",getWeatherData)

var weatherApi = "api.openweathermap.org/data/2.5/forecast?lat=''&lon=''&appid=2f79d354118140a37bb6982e94319d26";

 
var currentWeatherItems = document.getElementById('current-weather-items')

 

// Obtain user selected city latitude and longitude from Geocoding API

// Obtains user selected  city weather from Open Weather API

// Declaring the function and fetching the weather API 
 

