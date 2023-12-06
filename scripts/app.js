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

    console.log(lat);
    console.log(lon);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //testparagraph.innerText = JSON.stringify(data);
    })
    
}

// Convert from C to F
function ConvertToFahrenheit(value) {
    // Get Current Temperature
    // Use Formula of F = Temperature x 1.8000 + 32.00
    // Return Value

    let temporaryTemp = value;
    let calculatedVal = ((temporaryTemp * 1.8000) + 32.00);

    return calculatedVal;
}

// Convert from F to C
function ConvertToCelsius(value) {
    // Get Current Temperature
    // Use Formula of C = Temperature - 32.00 % 1.8000
    // Return Value

    let temporaryTemp = value;
    let calculatedVal = ((temporaryTemp - 32.00) / 1.8000);

    return calculatedVal;
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
        sessionStorage.tempCitySearch = cityName;
    }
}

function GetCitySessionStorage() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.tempCitySearch) {
          return sessionStorage.tempCitySearch;
        }
    }
}