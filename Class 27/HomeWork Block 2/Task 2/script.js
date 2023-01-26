console.log('Начало процесса');

let number = 0;
let error = "";
do {
    number = +prompt(error + 'Введите число');
    error = 'Вы ввели не число! ВНИМАНИЕ! ';
} while (isNaN(number));

let divider = 2;
for (number; number > 0;) {
    number--
    if (!(number % divider))
        continue
    console.log(number);
};

