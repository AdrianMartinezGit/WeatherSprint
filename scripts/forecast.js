import { apiKey } from "./environment.js";

let locationName = document.getElementById('forecast-location');
let locationDate = document.getElementById('date-text');
let forecastDate = document.getElementById('date-text-mm-dd');

let forecastDayOne   = document.getElementById('day-1-forecast');
let forecastDayTwo   = document.getElementById('day-2-forecast');
let forecastDayThree = document.getElementById('day-3-forecast');
let forecastDayFour  = document.getElementById('day-4-forecast');
let forecastDayFive  = document.getElementById('day-5-forecast');

let currentTempNum   = document.getElementById('current-temp');
let currentTempMisc  = document.getElementById('current-temp-misc');
let currentTempSun   = document.getElementById('current-temp-sun');
let currentTempCloud = document.getElementById('current-temp-clouds');

let metricButton = document.getElementById('metric-button');

let tempMetricValue = false;

SetCurrentWeather();

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd + '/' + yyyy;
const formattedMini  = mm + '/' + dd;

locationDate.innerText = `Current weather for ${formattedToday}`;
forecastDate.innerText = `Five Day Forecast from ${formattedMini}`;

function GetCitySessionStorage() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.tempCitySearch) {
          return localStorage.tempCitySearch;
        }
      }
}

function ConvertUnixToLocal(time) {
  let date = new Date(time * 1000);
  
  let hours   = date.getHours();
  let minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}

async function SetCurrentWeather() {
  let city_name = GetCitySessionStorage();
  let metric_val = 'metric';
  let metric_letter = "C";

  document.getElementById('metric-img').innerHTML = "<img src='../assets/icons/C_Temp.webp' class='img-menu metric-btn'>";

  if (tempMetricValue == true) {
    metric_val = 'imperial';
    document.getElementById('metric-img').innerHTML = "<img src='../assets/icons/F_Temp.webp' class='img-menu metric-btn'>";
    metric_letter = "F";
  }

  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=${metric_val}`);
  var data = await promise.json();

  console.log(data);

  locationName.innerText = `${data.name}, ${data.sys.country}`;
  currentTempNum.innerText = `${Math.floor(data.main.temp)}° ${metric_letter}`;
  currentTempMisc.innerHTML = `Feels like: ${Math.floor(data.main.feels_like)}° ${metric_letter}<br>H: ${Math.floor(data.main.temp_max)}° ${metric_letter} / L: ${Math.floor(data.main.temp_min)}° ${metric_letter}<br>Humidity: ${Math.floor(data.main.humidity)}%`;
  currentTempSun.innerHTML  = `Sunrise: ${ConvertUnixToLocal(data.sys.sunrise)}<br>Sunset: ${ConvertUnixToLocal(data.sys.sunset)}`;

  let rainVolume = 0;

  if (data.clouds.rain) {
    rainVolume = data.clouds.rain;
  }

  currentTempCloud.innerHTML = `Wind: ${data.wind.speed} mph<br>Cloudiness: ${data.clouds.all}%<br>Chance of rain: ${rainVolume}%`
}

metricButton.addEventListener('click', function() {
  tempMetricValue = !tempMetricValue;
  SetCurrentWeather();
});