// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("#ingredients");

ingredients.forEach((name) => {
  const liRef = document.createElement("li");
  liRef.textContent = name;
  liRef.classList.add("item");
  ulRef.append(liRef);
});

// Не розумію, це вставка за одну операцію? Чи це вставляється на кожній ітерації?
