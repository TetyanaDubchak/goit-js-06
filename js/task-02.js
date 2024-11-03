const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.dir(ingredientsList);
let allItems = []; 

ingredients.forEach(ing => {
  const item = document.createElement('li');
  item.textContent = ing;
  item.className = 'item';
  allItems.push(item)
  console.log(item);
})
ingredientsList.append(...allItems)