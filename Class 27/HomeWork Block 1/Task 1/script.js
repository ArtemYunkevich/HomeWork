let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a == b) {
    console.log("Эти числа равны");
} else console.log ("Числа введены некорректно");