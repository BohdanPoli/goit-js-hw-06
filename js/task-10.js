// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const ref = {
  div: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
};

let arr = [];
let markup = "";

// Функція рандомного кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція створення розмітки

function createBoxes(amount) {
  let height = 30;
  let width = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = `<div class='div-box' style="background-color:${getRandomHexColor()}; width:${width}px; height:${height}px;"></div>`;
    arr.push(div);
    markup = arr.join("");
    height += 10;
    width += 10;
  }
  return markup;
}

// Функція додавання розмітки по кліку

function onclickCreate(event) {
  createBoxes(ref.input.value);
  console.log(markup);
  ref.div.insertAdjacentHTML("afterbegin", markup);
  arr = [];
}

// Івенти

ref.createButton.addEventListener("click", onclickCreate);
ref.destroyButton.addEventListener("click", () => (ref.div.innerHTML = ""));
