let locationName = document.getElementById('forecast-location');
locationName.innerText = GetCitySessionStorage();

function GetCitySessionStorage() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.tempCitySearch) {
          return sessionStorage.tempCitySearch;
        }
    }
}