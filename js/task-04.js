const actionBtn = document.querySelectorAll('button');
const counterValue = document.querySelector('#value');

console.log(actionBtn);
actionBtn[0].addEventListener('click', () => {
  console.log('нажата кнопка декремент');
  --counterValue.textContent;
});
actionBtn[1].addEventListener('click', () => {
  console.log('нажата кнопка инкремент');
  ++counterValue.textContent;
});
