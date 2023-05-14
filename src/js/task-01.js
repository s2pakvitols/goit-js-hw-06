"use strict"

const listItemEl = categories.querySelectorAll(".item");
let numOfCategories = listItemEl.length;
console.log("Number of categories: ", numOfCategories);
console.log("\n");

listItemEl
    .forEach((element) => {
        const categoryH2El = element.firstElementChild;
        const textH2 = categoryH2El.textContent;
        console.log("Category: ", textH2);

        const listOfEl = element.lastElementChild;
        const longOflist = listOfEl.children;
        console.log("Elements: ", longOflist.length);
        console.log('\n');
});


