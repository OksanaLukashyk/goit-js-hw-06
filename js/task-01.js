// HTML містить список категорій ul#categories.
// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

function categoriesDescription() {
  const categoriesList = document.querySelector("#categories");
  const categoriesChildrenArr = [...categoriesList.children];
  console.log("Number of categories:", categoriesChildrenArr.length);
  categoriesChildrenArr.forEach((item) => {
    const categoryDescObj = {
      category: item.firstElementChild.textContent,
      elements: item.lastElementChild.children.length,
    };
    console.log("Category:", categoryDescObj.category);
    console.log("Elements:", categoryDescObj.elements);
  });
}

categoriesDescription();
