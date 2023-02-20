// ЗАНЯТИЕ 36 - Объекты

// ЗАДАНИЕ 3 (из домашки): Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let cylinder = {
//     radius: 10,
//     height: 5,
//     volume: function () {
//         result = (Math.PI * (this.radius ** 2)) * this.height;
//         return result;
//     }
// }

// console.log(cylinder.volume());

// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4 (из домашки): Выберите пингвина из [списка вымышленных пингвинов на Википедии] и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.

// КОД ЗАДАНИЯ 4 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let penguin = {
//     name: "Tux",
//     creator: "Larry Ewing",
//     creation_date: 1996
// }

// penguin.canfly = true;
// penguin.sayHello = function() {
//     console.log("Hello, my name is " + this.name);
// }
// penguin.fly = function() {
//     this.canfly ? console.log("I can fly") : console.log("I can't fly");
// }

// penguin.sayHello();
// penguin.fly();

// КОНЕЦ КОДА ЗАДАНИЯ 4 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 1 (из презентации): Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку с информацией о городе (например, в таком формате: "Город Добруш, население – 18760 человек").

// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let city1 = {};
// let city2 = {};
// let city3 = {};
// let city4 = {};
// let city5 = {};
// let city6 = {};
// let massiv = [city1, city2, city3, city4, city5, city6];

// let names = ["Брест", "Гродно", "Гомель", "Витебск", "Минск", "Могилев"]
// let population = [340000, 357500, 504000, 360500, 1997000, 355400]

// for (let i = 0; i < 6; i++) {
//     massiv[i].name = names[i];
//     massiv[i].population = population[i];
//     massiv[i].getinfo = function() {
//         console.log("Город " + this.name + ", население - " + this.population + " человек");
//     }
// }

// massiv[0].getinfo();

// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2 (из презентации): Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него метод, который выводит эту информацию в консоль в удобочитаемом формате.

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

let me = {
    name: "Артем",
    surname: "Юнкевич",
    hobby: "играть на синтезаторе и сочинять всякое"
}

me.introduction = function introduction() {
    console.log("Привет! Меня зовут " + this.name + " " + this.surname + ". Я люблю " + this.hobby);
}

me.introduction()

// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------