// dom selection
const generateBtn = document.querySelector('#generate-btn');
const generateDisplay = document.querySelector('[data-generate-display]');
const numericButtons = document.querySelectorAll('.numeric-button');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const submitButton = document.querySelector('button[type=submit]');
const tryCount = document.querySelector('#try-count');
const rightPin = document.querySelector('#right-pin');
const wrongPin = document.querySelector('#wrong-pin');
const submitDisplay = document.querySelector('[data-submit-display]');

//pin generator event listener
generateBtn.addEventListener('click', () => {
    let newPin = getRndInteger(1000, 10000);
    generateDisplay.value = newPin;
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}

let submitDisplayValue = submitDisplay.value;

numericButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const number = button.innerText;
        let newSubmittedPin = submitDisplayValue.toString() + number.toString();

        submitDisplayValue = newSubmittedPin;
    } )
});