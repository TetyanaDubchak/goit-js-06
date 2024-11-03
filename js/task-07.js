const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleRange = (e) => {
    const fontSize = e.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
}

inputRange.addEventListener('change', handleRange);