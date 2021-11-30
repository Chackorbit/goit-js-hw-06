// Напиши скрипт, который для каждого элемента массива ingredients:

// 1.Создаст отдельный элемент < li >.
// Обзательно используй метод document.createElement().
// 3.Добавит название ингредиента как его текстовое содержимое.
// 4.Добавит элементу класс item.
// 5.После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientList = document.querySelector("#ingredients");

const element = ingredients.map((option) => {
  const addLi = document.createElement("li");
  addLi.classList.add("item");
  addLi.textContent = option;

  return addLi;
});
ingredientList.append(...element);

console.log(ingredients);
