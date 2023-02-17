const cityInputEL = document.querySelector("#search-city");
let cityNameEl = document.querySelector("#city-name");
const searchButtonEl = document.querySelector("#search-button");
const clearButtonEl = document.querySelector("#clear-button");
const currentWeatherItemsEl = document.querySelector("#current-weather-items");
const searchHistoryEl = document.querySelector("#search-container");
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const humidityEl = document.querySelector("#humidity");

let today = moment();
$("#date").text(today.format("(L)"));

function getWeatherData(event) {
  event.preventDefault();

  //Search for Open Weather Geocoding API city name the user inputs to obtain latitude and longitude
  const cityName = cityInputEL.value;
  const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=2f79d354118140a37bb6982e94319d26`;

  $("#date").text(cityName + " " + $("#date").text());

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=2f79d354118140a37bb6982e94319d26&q=${cityName}&units=metric`;
      let weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=2f79d354118140a37bb6982e94319d26&units=metric`;

      fetch(apiUrlWeather)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          getCurrentWeather(data);
        })
        .then(function () {
          fetch(weatherUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              getWeatherForecast(data);
            });
        });
    });
}

function getCurrentWeather(data) {
  document.querySelector("#temp").textContent =
    "Temp: " + data.main.temp + " °C";
  document.querySelector("#wind").textContent =
    "Wind: " + data.wind.speed + " KPH";
  document.querySelector("#humidity").textContent =
    "Humidity: " + data.main.humidity + " %";

  let iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  document.getElementById("weather-icon").setAttribute("src", iconUrl);
}

function getWeatherForecast(data) {
  let forecastDiv = document.getElementById("five-day-forecast");
  forecastDiv.innerHTML = "";
  let parentDiv = document.createElement("div");
  let card = document.createElement("div");

  for (let i = 0; i < data.list.length; i += 8) {
    let cardHeading = document.createElement("h4");
    let cardBody = document.createElement("div");

    let dateHeading = moment.unix(data.list[i].dt).format("MM/DD/YYYY");
    cardHeading.append(dateHeading);

    let temperatureParagraph = document.createElement("p");
    temperatureParagraph.innerHTML = "Temp: " + data.list[i].main.temp + " °C";

    let windParagraph = document.createElement("p");
    windParagraph.innerHTML = "Wind: " + data.list[i].wind.speed + " KPH";

    let humidityParagraph = document.createElement("p");
    humidityParagraph.innerHTML =
      "Humidity: " + data.list[i].main.humidity + " %";

    cardBody.append(temperatureParagraph, windParagraph, humidityParagraph);
    card.append(cardHeading, cardBody);
    parentDiv.append(card);
  }
  forecastDiv.append(parentDiv);
}

//Still working on making local storage items, and then the clear history - will complete prior to resubmit
let clearHistory = function () {
  search = [];
  localStorage.clear();
  loadSearch();
};

//search for location that is clicked on in history
let reSearch = function (event) {
  if (event.target.innerHTML.includes("<")) {
    return;
  } else {
    getCoordinates(event.target.innerHTML);
  }
};

searchButtonEl.addEventListener("click", getWeatherData);
clearButtonEl.addEventListener("clcik", clearHistory);
searchHistoryEl.addEventListener("click", reSearch);

//for forecast ... let iconUrl = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
