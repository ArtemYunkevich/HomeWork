let a = prompt("Введите первое число:");
let b = prompt("Введите второе число:");
if (a * b > 0) {
    console.log("+");
} else if (a * b < 0) {
    console.log("-");
} else if (a * b == 0) {
    console.log("0");
}