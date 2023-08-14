// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const submissionForm = document.querySelector(".login-form");
const userCred = {};

function createUserObj(evt) {
  evt.preventDefault();

  //   const { email, password } = evt.currentTarget.elements;

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please, complete all fields!");
  }

  userCred.email = email.value.trim();
  userCred.password = password.value.trim();

  console.log(userCred);
  evt.currentTarget.reset();
}

submissionForm.addEventListener("submit", createUserObj);

// const submissionForm = document.querySelector(".login-form");

// function createUserObj(evt) {
//   evt.preventDefault();

//   const { email, password } = evt.currentTarget.elements;

//   if (email.value.trim() === "" || password.value.trim() === "") {
//     return alert("Please, complete all fields!");
//   }

//   const userCred = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };

//   console.log(userCred);
// evt.currentTarget.reset();
// }

// submissionForm.addEventListener("submit", createUserObj);
