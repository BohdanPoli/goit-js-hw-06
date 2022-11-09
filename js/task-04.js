// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const value = document.querySelector("#value");

let counterValue = Number(value.textContent);

const decrementRef = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementRef = document.querySelector(
  'button[data-action = "increment"]'
);

const decrement = () => (value.textContent = counterValue -= 1);
const increment = () => (value.textContent = counterValue += 1);

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);

// Не знаю, наскільки це правильне рішення
