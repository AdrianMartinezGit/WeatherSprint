// Import API Key from Environment JS File
import { apiKey } from "./environment.js";



// Ask User for Permission to Use Current Position
navigator.geolocation.getCurrentPosition(success, errorFunc);

// If Success
function success(position) {
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    ApiCall(position.coords.latitude, position.coords.longitude);
}

// Otherwise
function errorFunc(error) {
    console.log(error.message);
}

// Test Paragraph Variable
//let testparagraph = document.getElementById("test");

// Weather API Call
function ApiCall(latitude, longitude) {
    let lat = latitude;
    let lon = longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    
}

// Save City to Local Storage
function AddCityToFavorites(cityName) {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
      } else {
        // Sorry! No Web Storage support..
      }
}

// Remove City from Local Storage
function RemoveCityFromFavorites(cityName) {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
      } else {
        // Sorry! No Web Storage support..
      }
}

function SetCitySessionStorage(cityName) {
    if (typeof(Storage) !== "undefined") {
        localStorage.tempCitySearch = cityName;
    }
}

function GetCitySessionStorage() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.tempCitySearch) {
          return localStorage.tempCitySearch;
        }
    }
}