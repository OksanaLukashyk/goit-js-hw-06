// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
let step = 1;
const counterContent = document.querySelector("#value");
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

function decrCount(evt) {
  counterValue -= step;
  counterContent.textContent = counterValue;
}

function incrCount(evt) {
  counterValue += step;
  counterContent.textContent = counterValue;
}

decrBtn.addEventListener("click", decrCount);
incrBtn.addEventListener("click", incrCount);
