import { apiKey } from "./environment.js";

var lat = 0.0;
var lon = 0.0;

let testparagraph = document.getElementById("test");

function GeoAPICall() {
    let city_name = "Antioch";
    let state_code = "CA";
    let country_code = "US";

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=1&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        return data;
    })
    .then(data => {
        lat = data[0].lat;
        console.log(lat);
        lon = data[0].lon;
        console.log(lon);
        return [lat, lon];
    })
    .then((coord) => {
        lat = coord[0];
        lon = coord[1];
        console.log(`Lat after call 1 = ${lat}`);
        console.log(`Lon after call 1 = ${lon}`);
        ApiCall(lat, lon)
    })
    .catch(error => console.error(error));
    
    
}
function ApiCall(latitude, longitude) {
    let lat = latitude;
    let lon = longitude;
    //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.95&lon=121.28&appid=${apiKey}`)
    console.log(lat);
    console.log(lon);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        testparagraph.innerText = JSON.stringify(data);
    })
    
}

GeoAPICall();

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