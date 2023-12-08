let locationName = document.getElementById('forecast-location');
let locationDate = document.getElementById('date-text');
let forecastDate = document.getElementById('date-text-mm-dd');

let forecastDayOne   = document.getElementById('day-1-forecast');
let forecastDayTwo   = document.getElementById('day-2-forecast');
let forecastDayThree = document.getElementById('day-3-forecast');
let forecastDayFour  = document.getElementById('day-4-forecast');
let forecastDayFive  = document.getElementById('day-5-forecast');

locationName.innerText = GetCitySessionStorage();

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

function ForecastAPICall() {
  fetch();  
}