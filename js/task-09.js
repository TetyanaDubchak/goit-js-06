function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const textArea = document.querySelector('.color');
const box = document.querySelector('body');

const handleChangeColor = () => {
  const currentColor = getRandomHexColor();
  textArea.textContent = currentColor;
  box.style.backgroundColor = currentColor;
}

changeColorBtn.addEventListener('click', handleChangeColor)