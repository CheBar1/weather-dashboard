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
               
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // console.log(data.list[0].main.temp);  
            // console.log(data.list[0].wind.speed);  
            // console.log(data.list[0].main.humidity);  
            document.querySelector('#temp').textContent="Temp: " + data.list[0].main.temp + " °C";
            document.querySelector('#wind').textContent="Wind: " + data.list[0].wind.speed + " KPH";
            document.querySelector('#humidity').textContent="Humidity: " + data.list[0].main.humidity + " %";

    //***Errors when attempting to obtain weather image - will follow up before resubmit****
            // let iconUrl = 'http://openweathermap.org/img/wn/' + data.list.weather.icon + '@2x.png';  
            // console.log(iconUrl);
    
    //***Errors when attempting to create dymanic code and add elements for forecast - will follow up before resubmit***//
            // let forecastDiv = document.getElementById("#five-day-forecast");
            // // forecastDiv.innerHTML ="";
            // let parentDiv = document.createElement(div);
            // parentDiv.style.display = flex;
            // parentDiv.style.textAlign = center;
            
            // for (let i = 0; I < 40; I += 8) {
            
            // let div = document.createElement(div)
                
            // div.style.margin = 30 px;
            // div.style.color = white;
            // div.style.backgroundColor = rgb(60,60,90);
            // div.style.borderRadius = 20 px;
            // div.syle.flexFlow = column wrap;
            // div.style.padding = 10px;
            
            // let dateHeading = document.createElement(h4);
            
            // let temperatureParagraph = document.createElement(p);
            // temperatureParagraph.innerHTML = "Temp: " + data.list[i].main.temp + " °C";
            
            // let windParagraph = document.createElement(p);
            // windParagraph.innerHTML = "Wind: " + data.list[i].wind.speed + " KPH";
            
            // let humidityParagraph = document.createElement(p);
            // humidityParagraph.innerHTML = "Humidity: " + data.list[i].main.humidity + " %";
            // }
            
        })
    })
}

//Still working on making local storage items, and then the clear history - will complete prior to resubmit 
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
 

 
 
 

