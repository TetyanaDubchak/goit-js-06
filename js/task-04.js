const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueCounter = document.querySelector('#value');


let counterValue = 0;



const decrementHandleClick = () => {
    counterValue -= 1;
    valueCounter.textContent = counterValue;
};

const incrementHandleClick = () => {
    counterValue += 1;
    valueCounter.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementHandleClick);
incrementBtn.addEventListener('click', incrementHandleClick);
