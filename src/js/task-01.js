"use strict"

const listItemEl = categories.querySelectorAll(".item");
let numOfCategories = listItemEl.length;
console.log("Number of categories: ", numOfCategories);
console.log("\n");

listItemEl
    .forEach((element) => {
        const categoryH2El = element.querySelector("h2");
        const textH2 = categoryH2El.textContent;
        console.log("Category: ", textH2);

        const listOfEl= element.querySelectorAll("li")
        
        const longOflist = listOfEl.length;
        console.log("Elements: ", longOflist);
        console.log('\n');
});


