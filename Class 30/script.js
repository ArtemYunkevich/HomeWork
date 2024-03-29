// ЗАНЯТИЕ 30 - ФУНКЦИИ

// ЗАДАНИЕ 1: Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.

// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function getTheSmallestOfThree(arg1, arg2, arg3) {
//     if (arg1 < arg2 && arg1 < arg3) {
//         return console.log("Наименьшее из введенных вами чисел: " + arg1);
//     } else if (arg2 < arg1 && arg2 < arg3) {
//         return console.log("Наименьшее из введенных вами чисел: " + arg2);
//     } else if (arg3 < arg1 && arg3 < arg2) {
//         return console.log("Наименьшее из введенных вами чисел: " + arg3);
//     } else if (arg3 === arg1 && arg3 === arg2) {
//         return console.log("Все три числа равны");
//     }
// }

// let number1 = 0;
// let error = "";
// do {
//     number1 = +prompt(error + 'Введите первое число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number1));
// let number2 = 0;
// error = "";
// do {
//     number2 = +prompt(error + 'Введите второе число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number2));
// let number3 = 0;
// error = "";
// do {
//     number3 = +prompt(error + 'Введите третье число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number3));

// console.log(getTheSmallestOfThree(number1, number2, number3));


// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2: Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function calcSeconds(arg1, arg2, arg3) {
//     return calcDays(arg1) + calcHours(arg2) + calcMinutes(arg3);
// }
// function calcDays(arg1) {
//     return arg1 * 86400;
// }
// function calcHours(arg2) {
//     return arg2 * 3600;
// }
// function calcMinutes(arg3) {
//     return arg3 * 60;
// }

// let number1 = 0;
// let error = "";
// do {
//     number1 = +prompt(error + 'Введите первое число (сутки)');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number1) || number1 < 0);
// let number2 = 0;
// error = "";
// do {
//     number2 = +prompt(error + 'Введите второе число (часы - не более 24)');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number2) || number2 < 0 || number2 >= 24);
// let number3 = 0;
// error = "";
// do {
//     number3 = +prompt(error + 'Введите третье число (минуты - не более 60)');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number3) || number3 < 0 || number3 >= 60);

// console.log("Общее количество секунд - " + calcSeconds(number1, number2, number3))

// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3: Напишите рекурсивную функцию для подсчёта факториала числа.

// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function calcFactorial(arg1) {
//     if (arg1 == 0) {
//         return 1;
//     } else {
//         return arg1 * calcFactorial(arg1 - 1);
//     }
// }

// let numberX = 0;
// let error = "";
// do {
//     numberX = +prompt(error + 'Введите число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(numberX));

// console.log("Факториал введенного вами числа - " + BigInt(calcFactorial(numberX)));

// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4: Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. Например, если на вход функция получает 1234, вернуть она должна 4321.

// КОД ЗАДАНИЯ 4 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let numberX = 0;
// let error = "";
// do {
//     numberX = +prompt(error + 'Введите число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(numberX));

// let sum = "";
// function getReversedNumber(numberX) {
//     do {
//         sum += numberX % 10 + "";
//         numberX = numberX / 10 - (numberX / 10) % 1;
//     } while (numberX > 0);
//     return +sum;
// }
// console.log("Число в обратном порядке - " + getReversedNumber(numberX));

// // КОНЕЦ КОДА ЗАДАНИЯ 4 -------------------------------------------------------------------------------------------------------------------------------------------------

// // ЗАДАНИЕ 5: Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.

// // КОД ЗАДАНИЯ 5 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let number1 = 0;
// let error = "";
// do {
//     number1 = +prompt(error + 'Введите первое число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number1) || number1 === 0);
// let number2 = 0;
// error = "";
// do {
//     number2 = +prompt(error + 'Введите второе число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number2));
// let number3 = 0;
// error = "";
// do {
//     number3 = +prompt(error + 'Введите третье число');
//     error = 'Вы ввели неверные данные! ВНИМАНИЕ! ';
// } while (isNaN(number3));



// function calcDiscriminant(argA, argB, argC) {
//     return (
//         (argB ** 2) - (4 * argA * argC)
//     );
// }

// function calcX1(argA, argB, Discr) {
//     return (
//         ((-(argB) + Math.sqrt(Discr)) / (2 * argA))
//     );
// }

// function calcX2(argA, argB, Discr) {
//     return (
//         ((-(argB) - Math.sqrt(Discr)) / (2 * argA))
//     );
// }

// function defineRoots(Discr) {
//     if (Discr > 0) {
//         return "two";
//     } else if (Discr === 0) {
//         return "one";
//     } else {
//         return "none";
//     }
// }

// function getTheRoots(argX) {
//     if (argX == "two") {
//         return console.log("Корни уравнения: " + calcX1(number1, number2, Discr) + " и " + calcX2(number1, number2, Discr));
//     } else if (argX == "one") {
//         return console.log("Корень уравнения: " + calcX1(number1, number2, Discr));
//     } else if (argX == "none") {
//         return console.log("У данного уравнения нет корней");
//     } else {
//         return console.log("Ошибка");
//     }
// }

// let Discr = calcDiscriminant(number1, number2, number3);
// console.log(getTheRoots(defineRoots(Discr)));

// КОНЕЦ КОДА ЗАДАНИЯ 5 -------------------------------------------------------------------------------------------------------------------------------------------------

