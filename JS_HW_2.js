// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1;
while (i < 11) {
  result = result * 2;
  i++;
}
console.log(result);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const power = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * 2;
  }
  return result;
};
console.log(power(10));

// Вариант 2
const power2 = function (num) {
  return 2 ** num;
};
console.log(power2(10));

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)";
let result2 = "";
for (let i = 1; i <= 4; i++) {
  result2 += word;
  console.log(result2);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
  let result = "";
  for (let i = 1; i <= numberOfRows; i++) {
    result += stroka;
    console.log(result);
  }
}
printSmile(":)", 5);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

const getWordStructure = function (word) {
  let n = 0;
  let k = 0;
  let gl = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  let sogl = [
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
    "m",
    "M",
    "n",
    "N",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "v",
    "V",
    "w",
    "W",
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
  ];

  for (i = 0; i < word.length; i++) {
    for (j = 0; j < gl.length; j++) {
      if (word[i] === gl[j]) {
        n++;
        break;
      }
    }
    for (q = 0; q < sogl.length; q++) {
      if (word[i] === sogl[q]) {
        k++;
        break;
      }
    }
  }
  console.log(
    "Слово " + word + " cocтоит из " + n + " гласных " + k + " согласных"
  );
};
getWordStructure("anton");

// Вариант 2

function getWordStructure2(word) {
  const vowels = "aeiouy".split("");
  const consonants = "qwrtpsdfghjklzxcvbnm".split("");
  let numberOfVowels = 0;
  let numberOfConsonats = 0;
  for (char of word.toLowerCase()) {
    if (vowels.includes(char)) numberOfVowels++;
    if (consonants.includes(char)) numberOfConsonats++;
  }
  console.log(
    `Слово ${word} cocтоит из ${numberOfVowels} гласных ${numberOfConsonats} согласных букв`
  );
}

getWordStructure2("case");
getWordStructure2("Case");
getWordStructure2("Check-list");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  let newStroka = "";
  for (i = word.length - 1; i >= 0; i--) {
    newStroka = newStroka + word[i];
  }
  if (word.toLowerCase() == newStroka.toLocaleLowerCase()) {
    console.log(word, " - палиндром");
  } else {
    console.log(word, " - не палиндром");
  }
}

isPalindrom("ab1ba");
isPalindrom("Ab12ba");
isPalindrom("Abba");
isPalindrom("AbBa");
isPalindrom("abba");
