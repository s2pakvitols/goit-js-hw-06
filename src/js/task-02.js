const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const newElementEl = document.createElement("li");
  newElementEl.textContent = element;
  newElementEl.className = "item";
  const refIngredientsEl = document.querySelector("#ingredients");
 
  refIngredientsEl.append(newElementEl);
});

/*не можу зрозуміти, як додати елементи 
за одну операцію додавання. */
