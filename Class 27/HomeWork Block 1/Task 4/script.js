let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
(a > b) ? console.log(a) :
    (a < b) ? console.log(b) :
        (a == b) ? console.log("Эти числа равны") : console.log("Числа введены некорректно");