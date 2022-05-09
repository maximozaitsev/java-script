// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// Task 2*** Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./task2.json"));

let chekid = Array.from(new Set(users.map((item) => JSON.stringify(item)))).map(
  (item) => JSON.parse(item)
);
console.log(chekid);
