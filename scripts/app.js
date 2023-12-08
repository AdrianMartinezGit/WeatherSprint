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

async function ApiCall(latitude, longitude) {
    let lat = latitude;
    let lon = longitude;

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await promise.json();
    console.log(data);
}

function AddCityToFavorites(cityName) {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
      } else {
        // Sorry! No Web Storage support..
      }
}

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