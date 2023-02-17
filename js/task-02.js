const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const heading = document.createElement('li');
console.log(heading); // <h1></h1>

heading.textContent = 'Potatoes';
console.log(heading); // <h1>This is a heading</h1>

heading.classList.add('item');

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(heading);
