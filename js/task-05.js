// Напиши скрипт, який під час набору тексту в
//  інпуті input#name - input(подія input), підставляє
// його поточне значення в span#name - output.Якщо інпут
// порожній, у спані повинен відображатися рядок "
// Anonymous".

const ref = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

function onInputText(event) {
  if (event.currentTarget.value === "") {
    ref.span.textContent = "Anonymous";
  } else {
    ref.span.textContent = event.currentTarget.value;
  }
}

ref.input.addEventListener("input", onInputText);
