const input = document.querySelector('#validation-input');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
  console.log('получил фокус');
}

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  input.classList.add('invalid');
  if (event.currentTarget.value.trim().length === 6) {
    input.classList.replace('invalid', 'valid');
  } else {
    return;
  }
}

// function onInputChange(event) {
//   console.log(event.currentTarget.value.length);
// }
