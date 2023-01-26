console.log('Начало процесса');

let number = 0;
let error = "";
do {
    number = +prompt(error + 'Введите число');
    error = 'Вы ввели не число! ВНИМАНИЕ! ';
} while (isNaN(number));

let i = 0;
let sum = 0;
while (i < number) {
    console.log(number);
    number--;
    sum = sum + (number + 1);
    console.log('Текущая сумма - ', sum);
};


