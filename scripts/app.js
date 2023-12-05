import { apiKey } from "./environment.js";

navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    ApiCall(position.coords.latitude, position.coords.longitude);
}

function errorFunc(error) {
    console.log(error.message);
}

let testparagraph = document.getElementById("test");

function ApiCall(latitude, longitude) {
    let lat = latitude;
    let lon = longitude;

    console.log(lat);
    console.log(lon);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        testparagraph.innerText = JSON.stringify(data);
    })
    
}

function ConvertToFahrenheit() {
    // Get Current Temperature
    // Use Formula of F = Temperature x 1.8000 + 32.00
    // Return Value
}

function ConvertToCelsius() {
    // Get Current Temperature
    // Use Formula of C = Temperature - 32.00 % 1.8000
    // Return Value
}