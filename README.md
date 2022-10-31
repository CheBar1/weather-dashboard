# weather-dashboard

## Description
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This challenge was to build a weather dashboard that runs in the browser and feature dynamically updated HTML and CSS.

My challenge was to use the 5 Day Weather Forecast to retrieve weather data for cities. I was advised to use the base URL: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.  
*It should be noted as per https://openweathermap.org/api/uvi that the ultraviolet index was retired from the above URL 1st April 2021, hence I have not provided the UV Index for the current weather.

In order to practice my foundational skills I determined that I would code this challenge using only HTML, CSS, jQuery and JavaScript - hence no CSS frameworks have been utilised.

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Screen Shot
The following images show the web application's appearance and functionality:
![ScreenShot](./assets/images/Screenshot%202022-10-31%20182552.png)

## Link to deployed application
https://chebar1.github.io/weather-dashboard/

## Credits
University of Adelaide - Coding Bootcamp;

GitHub;

Youtube.com;

## License
Please refer to the LICENSE in the repo.
