'use strict'

// ЗАНЯТИЕ 42 - Продвинутый JS.

// ЗАДАНИЕ (без номера): Написать банкомат.

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

function atm() {
    let balance = 1000;
    const operationATM = function (amount) {
        if (amount < 0) {
            if ((balance + amount) < 0) {
                console.error(`Запрос: снять со счета ${Math.abs(amount)} долларов. \n Ответ: Недостаточно средств. Остаток на счете - ${balance} долларов.`);
            } else if ((balance + amount) >= 0) {
                balance += amount;
                return `Запрос: снять со счета ${Math.abs(amount)} долларов. \nОтвет: Операция выполнена успешно. Со счета снято ${Math.abs(amount)} долларов. Остаток на счете - ${balance} долларов.`;
            }
        } else if (amount > 0) {
            balance += amount;
            return `Запрос: положить на счет ${Math.abs(amount)} долларов. \nОперация выполнена успешно. Счет пополнен на ${Math.abs(amount)} долларов. Остаток на счете - ${balance} долларов.`;
        }
    }
    return operationATM;
}

let operation1 = atm();

console.log(operation1(-100));
console.log(operation1(-100));
console.log(operation1(-100));
console.log(operation1(-100));
console.log(operation1(-500));
console.log(operation1(-500));
console.log(operation1(500));
console.log(operation1(-400));
console.log(operation1(-100500));

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

