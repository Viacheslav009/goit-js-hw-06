function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const hex = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');
buttonChangeColor.addEventListener('click', getRandomHexColorText);

function getRandomHexColorText() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  hex.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
