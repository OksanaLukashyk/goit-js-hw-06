// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesCont = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

boxesCont.style.display = "flex";
boxesCont.style.flexWrap = "wrap";
boxesCont.style.gap = "5px";
boxesCont.style.justifyContent = "left";
boxesCont.style.alignItems = "center";
boxesCont.style.margin = "30px auto";

createBtn.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesArr = [];
  let initSidesSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const childBox = document.createElement("div");
    childBox.style.width = `${initSidesSize}px`;
    childBox.style.height = `${initSidesSize}px`;
    initSidesSize += 10;
    childBox.style.backgroundColor = getRandomHexColor();
    boxesArr.push(childBox);
  }
  return boxesCont.append(...boxesArr);
}

function destroyBoxes() {
  boxesCont.innerHTML = "";
  inputEl.value = "";
}
