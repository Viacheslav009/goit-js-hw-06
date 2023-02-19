const controlEl = document.querySelector('#font-size-control');

controlEl.addEventListener('mousemove', onMouseMove);
function onMouseMove(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
