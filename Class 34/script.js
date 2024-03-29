// ЗАНЯТИЕ 34 - МАССИВЫ

// ЗАДАНИЕ 1: Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их в конец массива. Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, на их место вставьте пять первых степеней двойки.

// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let massiv = [];

// for (let i = 0; i < 35; i++) {
//     massiv[i] = i + 1;
// }
// console.log("Исходный массив");
// console.log(massiv);

// massiv = massiv.concat(massiv.splice(0, 10));
// console.log("Вырезали первые 10 элементов и вставили их в конец");
// console.log(massiv);

// let sample = massiv.slice(11, 21).reverse();

// for (let i = 11, x = 0; i < 21; i++, x++) {
//     massiv.splice(i, 1, sample[x])
// }
// console.log("Развернули элементы с 11 по 20");
// console.log(massiv);

// for (let i = 21, n = 1; i < 26; i++, n++) {
//     massiv.splice(i, 1, 2 ** n)
// }
// console.log("Заменили элементы с 21 по 25 первыми пятью степенями двойки");
// console.log(massiv);


// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2: Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let massiv = ["a", "b", "c", "d", "e", "f", "g", "h", "c", "c", "c", "i", "a", "d"];


// let massiv = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 4, 5, 2, 6, 6, 6, 6, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9,];

// function deleteCopies(massiv) {
//     let startNum = 0;
//     let endNum = 0;

//     for (let i = 0; i < massiv.length; i++) {
//         startNum = massiv.indexOf(massiv[i]);
//         endNum = massiv.lastIndexOf(massiv[i]);
//         if (!(startNum === endNum)) {
//             massiv.splice(massiv.lastIndexOf(massiv[i]), 1);
//             i = 0;
//         }
//     }
//     console.log(massiv);
// }

// deleteCopies(massiv);


// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3: Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.

// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

let massiv = [1, undefined, 0, 34, "", " __"];


// let massiv = [0, 0, 0, 0, 0, 0, 0];

function booleanArrayCheck(massiv) {
    let i = 0;

    for (; i < massiv.length; i++) {
        if (Boolean(massiv[i]) === false) {
            massiv.splice(i, 1);
            i = 0;
        }
    }

    if (Boolean(massiv[0]) === false) {
        massiv.splice(0, 1);
    }

    console.log(massiv);
}
booleanArrayCheck(massiv);

// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------
