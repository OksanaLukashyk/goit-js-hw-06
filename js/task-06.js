// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");

function onBlur(evt) {
  // if (evt.currentTarget.value.length === Number(textInput.dataset.length))

  if (
    evt.currentTarget.value.length ===
    Number(textInput.getAttribute("data-length"))
  ) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.add("invalid");
    evt.currentTarget.classList.remove("valid");
  }
}

textInput.addEventListener("blur", onBlur);

// OR without "remove" rows in onBlur
// function onFocus(evt) {
//   evt.currentTarget.classList.remove("invalid", "valid");
// }
// textInput.addEventListener("focus", onFocus);
