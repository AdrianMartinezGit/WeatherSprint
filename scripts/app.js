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
let testparagraph = document.getElementById("test");

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
        testparagraph.innerText = JSON.stringify(data);
    })
    
}

// Convert from C to F
function ConvertToFahrenheit() {
    // Get Current Temperature
    // Use Formula of F = Temperature x 1.8000 + 32.00
    // Return Value
}

// Convert from F to C
function ConvertToCelsius() {
    // Get Current Temperature
    // Use Formula of C = Temperature - 32.00 % 1.8000
    // Return Value
}

// Save City to Local Storage
function AddCityToFavorites() {

}

// Remove City from Local Storage
function RemoveCityFromFavorites() {

}