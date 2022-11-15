// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector(".login-form");

let resultData = {};

function onSubmitForm(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.email.value;
  const passwordValue = event.currentTarget.password.value;

  if (emailValue === "" || passwordValue === "") {
    window.alert("Попередженням про те, що всі поля повинні бути заповнені.");
    return;
  }

  //   console.log(event);
  //   console.log(event.currentTarget);
  //   console.log(event.currentTarget.elements);
  //   console.log(event.currentTarget.elements.email.value);

  const formData = new FormData(event.currentTarget);

  resultData = formData.forEach((value, name) => {
    resultData[name] = value;
    console.log(resultData);
  });

  event.currentTarget.reset();
  resultData = {};
}

formRef.addEventListener("submit", onSubmitForm);
