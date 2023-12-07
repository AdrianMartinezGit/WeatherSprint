let availableKeyWords = [
    "Antioch, California, United States",
    "Airport, California, United States",
    "Austin, California, United States",
    "Avenue, California, United States",
    "Los Angeles, California, United States"
];

const resultsBox = document.querySelector('.result-box');
const inputBox   = document.getElementById('input-box');

let searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {    
    if (inputBox.value != "") {
        SetCitySessionStorage(inputBox.value);
        location.reload();
    }
});

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if (input.length) {
        result = availableKeyWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }

    display(result);

    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=SelectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function SelectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = "";
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