const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refIngredientsEl = document.querySelector("#ingredients");

const elementsArrey = ingredients.map((element) => {
  const newElementEl = document.createElement("li");
  newElementEl.textContent = element;
  newElementEl.className = "item";
  return newElementEl;
  
}); 


refIngredientsEl.append(...elementsArrey);


