const input = document.querySelector('#validation-input');
console.log(input);
input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);
// input.addEventListener('input', onInputChange);

function onInputFocus() {
  console.log('получил фокус');
}

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 6) {
    console.log('border-color: #4caf50;');
    input.classList.add('valid');
  } else {
    input.classList.toggle('invalid');
  }
}

// function onInputChange(event) {
//   console.log(event.currentTarget.value.length);
// }
