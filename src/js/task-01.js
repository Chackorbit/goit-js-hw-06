// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).
const numberCategories = document.querySelector(`#categories`);
console.log("Number of categories: ", numberCategories.children.length);

//======= Category Animals =======//
const animal = document.querySelector(".item");
console.log("Category: ", animal.children[0].textContent);
const animalEL = animal.querySelector("ul");
console.log("Elements: ", animalEL.children.length);

//======= Category Products =======//
const products = numberCategories;
console.log("Category: ", products.children[1].children[0].textContent);
const productsEL = numberCategories.children[1];
console.log("Elements: ", productsEL.children[1].children.length);

//======= Category Technologies =======//
const technologies = numberCategories.children[2];
console.log("Category: ", technologies.firstElementChild.textContent);
const technologiesEL = technologies.lastElementChild.children.length;
console.log("Elements: ", technologiesEL);
