const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// ---------------первый способ через for----------------

// const elements = [];

// for (let index = 0; index < ingredients.length; index++) {
//   console.log(ingredients[index]);

//   const heading = document.createElement('li');
//   console.log(heading);

//   heading.textContent = ingredients[index];
//   heading.classList.add('item');

//   elements.push(heading);
// }

// const ingredientsEl = document.querySelector('#ingredients');

// ingredientsEl.append(...elements);

// -------------второй способ через map-------------------

const elements = ingredients.map((index) => {
  const heading = document.createElement('li');
  // console.log(heading);

  heading.textContent = index;
  heading.classList.add('item');
  console.log(heading);
  return heading;
});

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...elements);
