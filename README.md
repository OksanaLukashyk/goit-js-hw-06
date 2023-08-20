# DOM and Events

## Завдання 1

HTML містить список категорій `ul#categories`.

````
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>```

Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
Для кожного элемента `li.item` у списку `ul#categories`, знайде і виведе в консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього).

Для виконання цього завдання потрібно використати метод `forEach()` і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

```Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5```
````

## Завдання 2

HTML містить порожній список `ul#ingredients`.

`<ul id="ingredients"></ul>`

JavaScript містить масив рядків.

````html
const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs",
"Condiments", ];``` Напиши скрипт, який для кожного елемента масиву
`ingredients`: 1. Створить окремий елемент `
<li>
  `. Обов'язково використовуй метод `document.createElement()`. 2. Додасть назву
  інгредієнта як його текстовий вміст. 3. Додасть елементу клас `item`. 4. Після
  чого, вставить усі `
</li>

<li>
  ` за одну операцію у список `ul#ingredients`. ## Завдання 3 Напиши скрипт для
  створення галереї зображень на підставі масиву даних. HTML містить список
  ul.gallery. ```html
  <ul class="gallery"></ul>
</li>
````

Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

```html
<ul id="ingredients"></ul>
```

```

```
