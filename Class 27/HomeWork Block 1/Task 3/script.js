let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
let c = +prompt("Введите третье число:");
if (a > b && a > c && b > c) {
    console.log(c + ", " + b + ", " + a);
} else if (a > b && a > c && b < c) {
    console.log(b + ", " + c + ", " + a);
} else if (b > a && b > c && a > c) {
    console.log(c + ", " + a + ", " + b);
} else if (b > a && b > c && a < c) {
    console.log(a + ", " + c + ", " + b);
} else if (c > a && c > b && a > b) {
    console.log(b + ", " + a + ", " + c);
} else if (c > a && c > b && a < b) {
    console.log(a + ", " + b + ", " + c);
};