// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonDestroy.addEventListener('click', destroyBoxes);

buttonCreate.addEventListener('click', getN);

function getN() {
  const amount = Number(document.getElementById('controls').firstElementChild.value);
  createBoxes(amount);
}

const root = document.getElementById('boxes');

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    fragment.appendChild(div);
  }
  root.appendChild(fragment);
}

function destroyBoxes() {
  root.textContent = '';
  document.getElementById('controls').firstElementChild.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
