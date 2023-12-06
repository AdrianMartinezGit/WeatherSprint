let availableKeyWords = [
    "Antioch, California, United States",
    "Airport, California, United States",
    "Austin, California, United States",
    "Avenue, California, United States"
];

const resultsBox = document.querySelector('.result-box');
const inputBox   = document.getElementById('input-box');

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