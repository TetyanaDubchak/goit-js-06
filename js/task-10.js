function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector('#boxes');
const numberQuantity = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

let amount;


const createBoxes=(amount)=> {
  let startWidth = 20;
  let arrayOfNumber = [];

  for (let i = 1; i <= amount; i += 1){
    startWidth = startWidth + 10;
    arrayOfNumber.push(startWidth);
  
  }
  const markup = arrayOfNumber.map((number) => `<div style="width: ${number}px; height: ${number}px; background-color: ${getRandomHexColor()};"></div>`).join('');
  boxContainer.innerHTML = markup;
}

const handleInputValue = (e) => {
  amount = e.currentTarget.value;
}

const destroyBoxes = () => {
  boxContainer.innerHTML = '';
  numberQuantity.value = '';
}

numberQuantity.addEventListener('change', handleInputValue);

createBtn.addEventListener('click', () => createBoxes(amount));

destroyBtn.addEventListener('click', destroyBoxes);
