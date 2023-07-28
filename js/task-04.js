let counterValue = 0;

const value = document.querySelector('#value');
const btnDecrement = value.previousElementSibling;
const btnIncrement = value.nextElementSibling;

btnDecrement.addEventListener('click', minus);

btnIncrement.addEventListener('click', plus);

function minus () {
    counterValue -= 1;
    value.textContent = counterValue;
    
}

function plus() {
    counterValue += 1;
    value.textContent = counterValue;
}