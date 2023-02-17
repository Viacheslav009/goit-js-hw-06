const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

const categoryEl = document.querySelectorAll('h2');

for (let i = 0; i < categoriesEl.length; i += 1) {
  console.log('Category:', categoryEl[i].textContent);
  console.log('Elements:', categoriesEl[i].querySelectorAll('li').length);
}
