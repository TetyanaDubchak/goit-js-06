const inputWindow = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

console.dir(text);

const handleInput = (event) => {

    text.textContent = event.currentTarget.value;
    if (text.textContent === '') {
        text.textContent = 'Anonymous';
    }

}

inputWindow.addEventListener('input', handleInput)