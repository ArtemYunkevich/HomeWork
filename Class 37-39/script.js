// ЗАНЯТИЕ 39 - ВСТРОЕННЫЕ ВОЗМОЖНОСТИ JS

// ЗАДАНИЕ 1 (презентация): Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.

// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function randomizeArray() {
//     let massiv = [];
//     for (let i = 0; i < 20; i++) {
//         massiv[i] = Math.ceil((Math.random() * 50));
//     }
//     console.log(massiv);
// }

// randomizeArray();

// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2 (презентация): Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное и максимальное значения элементов.

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function randomizeArray(counter, min, max) {
//     let massiv = [];
//     for (let i = 0; i < counter; i++) {
//         massiv[i] = Math.ceil(min + Math.random() * (max - min));
//     }
//     console.log(massiv);
// }

// randomizeArray(10, 30, 40);

// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3 (презентация): Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.

// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function checkURL(str) {
//     if ((str.startsWith("https://")) && (str.endsWith(".html"))) {
//         return true;
//     } else return false;
// } 

// console.log(checkURL("https://dillinger.io.html"))

// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4 (презентация): Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

// КОД ЗАДАНИЯ 4 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "abcdeabcdeabcdee";
// let counter = 0;

// function symbolCounter(symbol) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == symbol) {
//             counter++;
//             continue;
//         }
//     }
//     return counter;
// }
// console.log(`Количество символов в строке - ${symbolCounter("e")}`)

// КОНЕЦ КОДА ЗАДАНИЯ 4 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 5 (презентация): Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом (например, 'A' == 'a').

// КОД ЗАДАНИЯ 5 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "abcdEabcdeabcdeE";
// let counter = 0;

// function symbolCounter(symbol) {
//     let newStr = str.toLowerCase();
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i] == symbol) {
//             counter++;
//             continue;
//         }
//     }
//     return counter;
// }
// console.log(`Количество символов в строке - ${symbolCounter("e")}`)

// КОНЕЦ КОДА ЗАДАНИЯ 5 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 6 (презентация): Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

// КОД ЗАДАНИЯ 6 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function showDate() {
//     let testDate = new Date();
//     let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
//     console.log(`Сегодняшняя дата - ${testDate.getDate()} ${months[testDate.getMonth()]} ${testDate.getFullYear()}`)
// }
// showDate();

// КОНЕЦ КОДА ЗАДАНИЯ 6 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 7 (презентация): Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

// КОД ЗАДАНИЯ 7 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function calcSeconds() {
//     let testDate = new Date();
//     testDate.setFullYear(1970);
//     testDate.setMonth(0);
//     testDate.setDate(1);
//     let seconds = (testDate.getTime()) / 1000 + 10800;
//     return seconds;
// }

// console.log(calcSeconds())

// КОНЕЦ КОДА ЗАДАНИЯ 7 -------------------------------------------------------------------------------------------------------------------------------------------------


// ЗАДАНИЕ 1 (домашка): Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создает на его основе новый. Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}.


// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let massiv = [];

// function randomizeArray() {
//     for (let i = 0; i < 20; i++) {
//         massiv[i] = Math.ceil((Math.random() * 50));
//     }
//     return massiv;
// }

// console.log(randomizeArray())

// let advancedMassiv = [];
// function advanceArray(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//         advancedMassiv[i] = {};
//         advancedMassiv[i].initial = massiv[i];
//         advancedMassiv[i].sqrt = Math.sqrt(massiv[i]);
//         advancedMassiv[i].floor = (Math.round(Math.sqrt(massiv[i])) === Math.floor(Math.sqrt(massiv[i])));
//         advancedMassiv[i].ceil = (Math.round(Math.sqrt(massiv[i])) === Math.ceil(Math.sqrt(massiv[i])));
//     }
//     return advancedMassiv;
// }

// console.log(advanceArray(massiv));


// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2 (домашка) : Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округленное до сотых.

// РАБОТАЕТ ТОЛЬКО ВМЕСТЕ С КОДОМ ИЗ ЗАДАНИЯ 1

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function advanceArray2(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//         advancedMassiv[i].roundedSqrt = massiv[i].sqrt.toFixed(2);
//     }
//     return advancedMassiv;
// }

// console.log(advanceArray2(advancedMassiv));

// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3 (домашка): Напишите функцию, которая определяет, является ли строка палиндромом.

// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "Мат и тут и там";


// function checkStr(str) {
//     let cleanStr = str.toLowerCase().trim().split(" ").join("");
//     let massiv = cleanStr.split("");
//     let newMassiv = massiv.reverse();
//     let newStr = newMassiv.join("");
//     if (cleanStr == newStr) {
//         console.log("Эта строка является палиндромом");
//     } else {
//         console.log("Эта строка не является палиндромом");
//     }
// }

// checkStr(str);


// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4 (домашка): Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.

// КОД ЗАДАНИЯ 4 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "aaabbbcccdddeffgggiii";

// function deleteCopies(str) {

//     let startNum = 0;
//     let endNum = 0;
//     let massiv = str.split("")

//     for (let i = 0; i < massiv.length; i++) {
//         startNum = massiv.indexOf(massiv[i]);
//         endNum = massiv.lastIndexOf(massiv[i]);
//         if (!(startNum === endNum)) {
//             massiv.splice(massiv.lastIndexOf(massiv[i]), 1);
//             i = 0;
//         }
//     }
//     return massiv;
// }

// function checkCopies(str) {
//     let massiv = deleteCopies(str);
//     let newMassiv = [];
//     let counter = 0;
//     let symbol = "";
//     for (let i = 0; i < massiv.length; i++) {
//         symbol = massiv[i];
//         for (t = 0; t < str.length; t++) {
//             if (symbol == str[t]) {
//                 counter++;
//                 continue;
//             }
//         }
//         newMassiv.push(counter);
//         counter = 0;
//     }
//     return newMassiv;
// }

// function findMaxCounter() {
//     let newMassiv = checkCopies(str);
//     let maxCounter = Math.max.apply(null, newMassiv);
//     return maxCounter;
// }

// function getMaxCounter() {
//     let newMassiv = checkCopies(str);
//     let maxCounter = Math.max.apply(null, newMassiv);
//     return newMassiv.indexOf(maxCounter)
// }

// function searchMultiples() {
//     let newMassiv = checkCopies(str);
//     let maxCounter = findMaxCounter();
//     let numOfMax = 0;
//     for (let i = 0; i < newMassiv.length; i++) {
//         if (newMassiv[i] == maxCounter) {
//             numOfMax++;
//             continue;
//         }
//     }
//     return numOfMax;
// }

// function showMaxCounter() {
//     if (searchMultiples() == 1) {
//         return oneCounter();
//     } else {
//         return multiCounters();
//     }
// }

// function oneCounter() {
//     let massiv = deleteCopies(str);
//     return massiv[getMaxCounter()];
// }

// function multiCounters() {
//     let newMassivA = checkCopies(str);
//     let newMassivB = deleteCopies(str);
//     let maxCounter = findMaxCounter();
//     let indexes = [];

//     for (let i = 0; i < newMassivA.length; i++) {
//         if (!(newMassivA[i] === maxCounter)) {
//             continue;
//         }
//         indexes.push(i);
//     }

//     let result = ``;
//     for (let i = 0; i < indexes.length; i++) {
//         result = result + newMassivB[indexes[i]];
//     }
//     return result;
// }

// console.log(deleteCopies(str));
// console.log(checkCopies(str));
// console.log(findMaxCounter());
// console.log(searchMultiples());
// console.log(showMaxCounter());


// КОНЕЦ КОДА ЗАДАНИЯ 4 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 5 (домашка): Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.

// КОД ЗАДАНИЯ 5 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "qwe abc qwe abc def abc";
// let search = "abc";
// let replace = "lol";

// function replacer(str, search, replace) {
//     let result = str.split(search).join(replace);
//     return result;
// }

// console.log(replacer(str, search, replace));

// КОНЕЦ КОДА ЗАДАНИЯ 5 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 6 (домашка): Напишите функцию, которая заменяет первую букву каждого слова в строке на такую же большую.

// КОД ЗАДАНИЯ 6 ---------------------------------------------------------------------------------------------------------------------------------------------------------


// ВАРИАНТ 1 ==========================================
// "use strict";

// let str = "мама мыла раму"
// function toUpperCase(str) {
//     let strEdited = str.trim().split(" ");

//     for (let i = 0; i < strEdited.length; i++) {
//         word = strEdited[i];
//         massiv = word.split("");
//         massiv[0] = massiv[0].toUpperCase();
//         word = massiv.join("");
//         strEdited[i] = word;
//     }

//     console.log(strEdited.join(" "));

// }

// console.log(toUpperCase(str));

// ВАРИАНТ 2 СЕВЫ ==========================================

// let str = "custom text azaa , sasd"
// let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function toUpperCase(str) {
//     let strEdited = "";
//     for (let i = 0; i < str.length; i++) {

//         if (i > 0) {

//             if (letters.includes(str[i - 1])) {
//                 strEdited += str[i];
//             }
//             else {
//                 strEdited += str[i].toUpperCase();
//             }
//         }
//         else {
//             strEdited += str[i].toUpperCase();
//         }
//     }
//     console.log(strEdited);
// }

// console.log(toUpperCase(str));

// КОНЕЦ КОДА ЗАДАНИЯ 6 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 7 (домашка): Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, строка “я учусь программированию” должна преобразоваться в “я уч*сь прог*ам*и**в*н*ю”.

// КОД ЗАДАНИЯ 7 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let str = "Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки."

// function replaceDuplicates(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {

//         if ((!(result.includes(str[i]))) || (str[i] == " ") || (str[i] == ".") || (str[i] == ",")) {
//             result += str[i];
//         } else {
//             result += "*";
//         }
//     }

//     return result;
// }

// console.log(replaceDuplicates(str));

// КОНЕЦ КОДА ЗАДАНИЯ 7 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 8 (домашка): Напишите функцию, которая возвращает текущий день недели на русском языке.

// КОД ЗАДАНИЯ 8 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function returnDayOfTheWeek() {
//     let testDate = new Date();
//     let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     let result = days[testDate.getDay()];

//     return result;
// }

// console.log(`Сегодняшний день недели -  ${returnDayOfTheWeek()}`);

// КОНЕЦ КОДА ЗАДАНИЯ 8 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 9 (домашка): Напишите функцию, которая принимает у пользователя дату в формате “ДД-ММ-ГГГГ” и, используя функцию из задачи 8, выдает в консоль день недели для этой даты.

// КОД ЗАДАНИЯ 9 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let inputDate = prompt("Введите дату в формате \"ДД-ММ-ГГГГ\"")

// function returnDayOfTheWeek() {
//     inputDate = inputDate.split("-");

//     let testDate = new Date();
//     testDate.setFullYear(inputDate[2]);
//     testDate.setMonth(inputDate[1] - 1);
//     testDate.setDate(inputDate[0]);

//     let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     let result = days[testDate.getDay()];

//     return result;
// }

// console.log(`День недели на эту дату -  ${returnDayOfTheWeek()}`);

// КОНЕЦ КОДА ЗАДАНИЯ 9 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 10 (домашка): Примите у пользователя день его рождения в формате “ДД-ММ-ГГГГ”. Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).

// КОД ЗАДАНИЯ 10 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let input = prompt("Введите дату в формате \"ДД-ММ-ГГГГ\"")
// let now = new Date();

// input = input.split("-");

// function daysCounter() {
//     let birthDate = new Date();
//     birthDate.setFullYear(now.getFullYear());
//     birthDate.setMonth(input[1] - 1);
//     birthDate.setDate(input[0]);
//     if (birthDate < now) {
//         birthDate.setFullYear(now.getFullYear() + 1);
//     }
//     let result = (birthDate - now) / 86400000;
//     return result.toFixed();
// }

// function jubileeDate() {
//     let now = new Date();
//     let birthDate = new Date();
//     birthDate.setFullYear(input[2]);
//     birthDate.setMonth(input[1] - 1);
//     birthDate.setDate(input[0]);
//     let daysSinceBirthdate = (now - birthDate) / 86400000;
//     let daysToJubilee = (1000 - (((daysSinceBirthdate / 1000) % 1) * 1000).toFixed());
//     now.setDate(now.getDate() + daysToJubilee);
//     return now;
// }

// function jubileeCounter() {
//     let birthDate = new Date();
//     birthDate.setFullYear(input[2]);
//     birthDate.setMonth(input[1] - 1);
//     birthDate.setDate(input[0]);
//     return ((jubileeDate() - birthDate) / 86400000);
// }

// console.log(`Количество дней до ближайшего дня рождения - ${daysCounter()}`);
// console.log(`Дата ближайшего 1000-дневного юбилея - ${jubileeDate().toLocaleDateString()} (${jubileeCounter()} дней)`);

// КОНЕЦ КОДА ЗАДАНИЯ 10 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 11 (домашка): Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку. Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах. Массив должен быть пройден до конца, несмотря на ошибки!

// КОД ЗАДАНИЯ 11 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function checkSquare(num) {
//     if (Math.sqrt(num) % 1)
//         throw new Error("Ошибка: введенное число не является квадратом целого числа")
//     return Math.sqrt(num);
// }

// function randomizeArray(counter, min, max) {
//     let massiv = [];
//     for (let i = 0; i < counter; i++) {
//         massiv[i] = Math.ceil(min + Math.random() * (max - min));
//     }
//     console.log(massiv);
//     return massiv;
// }

// let testMassiv = randomizeArray(10, 20, 40);

// for (let i = 0; i < testMassiv.length; i++) {
//     try {
//         console.log(`Попытка ${i + 1}: удачная. Ответ - ${checkSquare(testMassiv[i])}`)
//     } catch(e) {
//         console.log(`Попытка ${i + 1}: неудачная. ${e.message}`);
//     }
// }

// КОНЕЦ КОДА ЗАДАНИЯ 11 -------------------------------------------------------------------------------------------------------------------------------------------------

