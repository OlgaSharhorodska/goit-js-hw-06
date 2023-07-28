const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;
  list.append(li);

});

console.log(list);