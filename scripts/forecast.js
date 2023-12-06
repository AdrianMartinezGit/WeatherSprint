let locationName = document.getElementById('forecast-location');
locationName.innerText = GetCitySessionStorage();

function GetCitySessionStorage() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.tempCitySearch) {
          return localStorage.tempCitySearch;
        }
    }
}