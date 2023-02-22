// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const hexEl = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');
buttonChangeColor.addEventListener('click', getRandomHexColorText);

function getRandomHexColorText() {
  hexEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = hexEl.textContent;

  console.log(getRandomHexColor());
  console.log(hexEl.textContent);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
