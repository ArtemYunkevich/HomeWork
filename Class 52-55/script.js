// ЗАНЯТИЕ 54-55 (модуль 2) - ВСТРОЕННЫЕ ВОЗМОЖНОСТИ JS

// ЗАДАНИЕ 1 (презентация): Реализуйте в прототипном стиле класс Machine с базовыми методами
//                          включить/выключить. Создайте класс Fridge и отнаследуйтесь от Machine, создайте
//                          метод на охлаждение, а так же сделайте так, чтобы методы включения/выключения
//                          работали с выводом в консоль сообщения с текущим значением enabled

// КОД ЗАДАНИЯ 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// function Machine(name) {
//     this.name = name;
//     this.enabled = false;
//     this.turnOn = () => {
//         this.enabled = true;
//         console.log(`Enabled: ${this.enabled}`);
//     }
//     this.turnOff = () => {
//         this.enabled = false;
//         console.log(`Enabled: ${this.enabled}`);
//     }
// }

// let Fridge = new Machine('Fridge');
// Fridge.freezerEnabled = false;
// Fridge.turnOff = function() {
//     this.enabled = false;
//     this.freezerEnabled = false;
//     console.log(`Enabled: ${this.enabled}`);
// }
// Fridge.freezerOn = function() {
//     if (this.enabled == true) {
//         this.freezerEnabled = true;
//         console.log(`Freezer enabled: ${this.freezerEnabled}`);
//     } else console.log('You should turn the fridge on first');
// }
// Fridge.freezerOff = function() {
//     if (this.enabled == true && this.freezerEnabled == true) {
//         this.freezerEnabled = false;
//         console.log(`Freezer enabled: ${this.freezerEnabled}`);
//     } else if (this.enabled == true && this.freezerEnabled == false) {
//         console.log(`Freezer is already turned off`);
//     } else if (this.enabled == false) {
//         console.log(`Fridge is already turned off`);
//     }
// }
// console.log(Fridge);
// Fridge.freezerOn();
// Fridge.turnOn();
// Fridge.freezerOn();
// console.log(Fridge);
// Fridge.freezerOff();
// Fridge.freezerOff();
// Fridge.turnOff();
// Fridge.freezerOff();

// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2 (презентация): Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//                          который параметром принимает строку, а возвращает ее в перевернутом виде, метод
//                          ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав
//                          ее первую букву заглавной и метод ucWords, который принимает строку и делает
//                          заглавной первую букву каждого слова этой строки.

// КОД ЗАДАНИЯ 2 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let MyString = function (string) {
//     this.string = string;
//     this.reverse = function () {
//         return this.string.split('').reverse().join("");
//     };
//     this.ucFirst = function () {
//         return this.string[0].toUpperCase() + string.substr(1, string.length - 1);
//     };
//     this.ucWords = function () {
//         return this.string.split(' ').map((elem) => { return elem[0].toUpperCase() + elem.substr(1, string.length - 1) }).join(" ");
//     }
// }

// let testString = new MyString("Это просто строка");

// console.log(testString)
// console.log(testString.reverse());
// console.log(testString.ucFirst());
// console.log(testString.ucWords());

// КОНЕЦ КОДА ЗАДАНИЯ 2 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3 (презентация): Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
//                          метод isEmail параметром принимает строку и проверяет, является ли она корректным
//                          емейлом или нет. Если является - возвращает true, если не является - то false. Кроме
//                          того, класс будет иметь следующие методы: метод isDomain для проверки домена,
//                          метод isDate для проверки даты и метод isPhone для проверки телефона.


// КОД ЗАДАНИЯ 3 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let Validator = function (string) {
//     this.string = string;
//     this.isEmail = function (string) {
//         let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//         return this.string.match(regexp) ? true : false;
//     };
//     this.isDomain = function (string) {
//         let regexp = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
//         return this.string.match(regexp) ? true : false;
//     };
//     this.isDate = function (string) {
//         let regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/g;
//         return this.string.match(regexp) ? true : false;
//     };
//     this.isPhone = function (string) {
//         let regexp = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/g;
//         return this.string.match(regexp) ? true : false;
//     }
// }


// ВЫБРАТЬ ОДНУ ИЗ ПРОВЕРОК НИЖЕ
// проверка email

// let testValidator1 = new Validator('blablabla');
// console.log(testValidator1.isEmail())
// let testValidator2 = new Validator('blablabla@gmail.com');
// console.log(testValidator2.isEmail())

// проверка домена

// let testValidator1 = new Validator('blablabla');
// console.log(testValidator1.isDomain())
// let testValidator2 = new Validator('blablabla.com');
// console.log(testValidator2.isDomain())

// проверка даты

// let testValidator1 = new Validator('123121243123');
// console.log(testValidator1.isDate())
// let testValidator2 = new Validator('25-04-1996');
// console.log(testValidator2.isDate())

// проверка телефона

// let testValidator1 = new Validator('1234567890');
// console.log(testValidator1.isPhone())
// let testValidator2 = new Validator('+375292207900');
// console.log(testValidator2.isPhone())


// КОНЕЦ КОДА ЗАДАНИЯ 3 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4 (презентация): Реализуйте класс Worker (Работник), который будет иметь следующие
//                          свойства: name (имя), surname (фамилия), rate (ставка за день работы), days
//                          (количество отработанных дней). Также класс должен иметь метод
//                          getSalary(), который будет выводить зарплату работника. Зарплата - это
//                          произведение (умножение) ставки rate на количество отработанных дней days.


// КОД ЗАДАНИЯ 4 ---------------------------------------------------------------------------------------------------------------------------------------------------------

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return `Работник - ${this.name + ' ' + this.surname}, Зарплата - ${this.rate * this.days} долл.`;
//     }
// }

// let Artem = new Worker('Артем', 'Юнкевич', 250, 22);
// let Ivan = new Worker('Иван', 'Иванов', 120, 22);
// console.log(Artem.getSalary());
// console.log(Ivan.getSalary());


// КОНЕЦ КОДА ЗАДАНИЯ 4 -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 5 (презентация): Реализуйте класс User принимающий объект со свойствами name
//                          и password, предусмотрите метод login, возвращающее значение true
//                          в случае совпадение связки имя/пароль и changeName(). Отнаследуйте
//                          класс User в класс Admin и сделайте так, чтобы админ всегда имел
//                          дефолтное поле имя (admin) и чтобы в реализации отсутствовала
//                          возможность смены имени, а также при логине в консоль выводилось
//                          сообщение о том, что админ залогинен.


// КОД ЗАДАНИЯ 5 ---------------------------------------------------------------------------------------------------------------------------------------------------------

class User {
    constructor(obj) {
        this.name = obj.name;
        this.password = obj.password;
    }
    login(name, password) {
        return (this.name == name && this.password == password) ? true : false;
    }
    changeName(newName) {
        this.name = newName;
    }
}

class Admin extends User {
    constructor(password) {
        super(password);
        this.name = 'Admin';
    }

    login(name, password) {
        (this.name == name && this.password == password) ? console.log('Админ залогинен') : console.log('Неверные данные для входа');
    }

    changeName() {
        console.log('Смена имени недоступна');
    }
}

let Artem = new User({ name: 'Beezy', password: '1234' });
console.log(Artem);
console.log(Artem.login('Beezy', '1234'));

let Artemiy = new Admin({ password: '1234' });
console.log(Artemiy);
console.log(Artemiy.changeName('Petya'));
console.log(Artemiy.login('Admin', '1234'));


// КОНЕЦ КОДА ЗАДАНИЯ 5 -------------------------------------------------------------------------------------------------------------------------------------------------
