// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.querySelector(".gallery");
const markup = [];

images.forEach((element) => {
  const part = `<li class='gallery-item'><img src='${element.url}' alt='${element.alt}' /></li>`;
  markup.push(part);
});

const gallery = markup.join("");

ulRef.insertAdjacentHTML("afterbegin", gallery);

// Рішення до якого хотілось би дійти самому

// const ulRef = document.querySelector(".gallery");

// const liGallery = images
//   .map(
//     (element) =>
//       `<li class='gallery-item'><img src='${element.url}' alt='${element.alt}' width="320"/></li>`
//   )
//   .join();

// ulRef.insertAdjacentHTML("afterbegin", liGallery);
