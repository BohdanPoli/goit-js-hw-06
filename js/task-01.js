// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const mainUlRef = document.querySelector("#categories");
const liItemRef = mainUlRef.querySelectorAll(".item");

console.log(`Number of categories: ${liItemRef.length}`);

for (let i = 0; i < liItemRef.length; i += 1) {
  console.log(`Category: ${liItemRef[i].firstElementChild.textContent}`);
  console.log(`Elements: ${liItemRef[i].querySelector("ul").children.length}`);
}

// Рішення до якого хотілось би дійти самому хех)

// const categoriesItems = document.querySelectorAll("#categories > .item");
// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach((element) => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });
