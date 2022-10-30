const cityInputEL = document.querySelector("#search-city");
let cityNameEl = document.querySelector("#city-name");
const searchButtonEl = document.querySelector('#search-button');
const clearButtonEl = document.querySelector('#clear-button');
const currentWeatherItemsEl = document.querySelector('#current-weather-items');
const searchHistoryEl = document.querySelector('#search-container');
const tempEl = document.querySelector('#temp');
const windEl = document.querySelector('#wind');
const humidityEl = document.querySelector('#humidity');


let today = moment(); $("#date").text(today.format('(L)'))


function getWeatherData(event) {
    event.preventDefault();
 
//Search for Open Weather Geocoding API city name the user inputs to obtain latitude and longitude
    const cityName = cityInputEL.value;
    const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=2f79d354118140a37bb6982e94319d26`;

    $("#date").text(cityName + " " +$("#date").text())

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data[0].lat); Console.log to check outcome 
        // console.log(data[0].lon); Console.log to check outcome 

//Search Open Weather 5 day weather forecast 2.5 for current weather details at top of page
        let weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=2f79d354118140a37bb6982e94319d26&units=metric`;
        // let iconLink = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png"
        
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // console.log(data.list[0].main.temp); Console.log to check outcome 
            // console.log(data.list[0].wind.speed); Console.log to check outcome 
            // console.log(data.list[0].main.humidity); Console.log to check outcome 
                document.querySelector('#temp').textContent="Temp: " + data.list[0].main.temp + " °C";
                document.querySelector('#wind').textContent="Wind: " + data.list[0].wind.speed + " KPH";
                document.querySelector('#humidity').textContent="Humidity: " + data.list[0].main.humidity + " %";

            // for(i=0;i<40;i+=8){
            
            //     document.querySelector('#temp').innerText=data.list[i].main.temp;
            //     document.querySelector('#wind').innerText=data.list[i].wind.speed;
            //     document.querySelector('#humidity').innerText=data.list[i].main.humidity;
                
            // }
        })
    })
}

let clearHistory = function() {
    search = [];
    localStorage.clear();
    loadSearch();
}

//search for location that is clicked on in history
let reSearch = function(event) {
    if (event.target.innerHTML.includes("<")) {
        return;
    } else {
        getCoordinates(event.target.innerHTML)
    }
}

searchButtonEl.addEventListener("click", getWeatherData);
clearButtonEl.addEventListener("clcik", clearHistory);
searchHistoryEl.addEventListener("click", reSearch);
 

 
 
 

