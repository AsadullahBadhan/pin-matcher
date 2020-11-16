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
    let newPin = Math.floor(Math.random() * (10000 - 1000 )) + 1000; // Math.floor(Math.random() * (max - min)) + min;
    generateDisplay.value = newPin;
    submitDisplay.value = '';
    rightPin.style.display = 'none';
    wrongPin.style.display = 'none';
    tryCount.innerText = '3';
});

numericButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const number = button.innerText;
        const submitedValue = submitDisplay.value;
        let newSubmittedPin = submitedValue + number;
        submitDisplay.value = newSubmittedPin;
    });
});

deleteButton.addEventListener('click', () =>{
    const displayNumber = submitDisplay.value;
    const newNumber = displayNumber.slice(0, -1);
    submitDisplay.value = newNumber;
});

clearButton.addEventListener('click', () => {
    submitDisplay.value = '';
    rightPin.style.display = 'none';
    wrongPin.style.display = 'none';
});

submitButton.addEventListener('click', () => {
    const generateDisplayValue = generateDisplay.value;
    const submitDisplayValue = submitDisplay.value;
    let tryNumber = parseFloat(tryCount.innerText);

    if (generateDisplayValue === submitDisplayValue) {
        rightPin.style.display = 'block';
        wrongPin.style.display = 'none';
    } else {
        wrongPin.style.display = 'block';
        rightPin.style.display = 'none';
        setTimeout(() => {
            wrongPin.style.display = 'none';
        }, 1500);

        tryCount.innerText = tryNumber - 1;
        if (tryNumber <= 1) {
            submitButton.setAttribute('disabled','');
        }
        submitDisplay.value = '';
    }
})

