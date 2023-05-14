// ЗАНЯТИЕ 59-60 (модуль 2) - ВЗАИМОДЕЙСТВИЕ С СЕРВЕРОМ

// ЗАДАНИЕ 1 (презентация): Создайте html файл и наполните его произвольными данными. 
//                          Напишите функцию получения этого файла используя синхронный/асинхронный подходы. 
//                          Напишите обработчики события на каждый тип события. Посмотрите в отладчике, что происходит на каждом шагу выполнения запроса.


// КОД ЗАДАНИЯ 1 (aсинхронный) ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let fileGetter = (method, link) => {

//     let request1 = new XMLHttpRequest();
//     request1.open(method, link, true);
//     request1.send();

//     request1.onload = () => {
//         if (request1.status != 200) {
//             console.log(`Ошибка ${request1.status}: ${request1.statusText}`)
//         } else {
//             console.log(`Готово, данные получены: \n\n  ${request1.getAllResponseHeaders()} \n\n ${request1.response}`)
//         }
//     }

//     request1.onprogress = (event) => {
//         if (event.lengthComputable) {
//             console.log(`Получено ${event.loaded} из ${event.total} байт`)
//         } else (`Получено ${event.loaded} байт`)
//     }

//     request1.onerror = () => {
//         console.log(`Не удалось осуществить запрос данных`);
//     }
// }

// fileGetter('GET', './someFolder/someHTML.html');


// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------

// КОД ЗАДАНИЯ 1 (синхронный) ---------------------------------------------------------------------------------------------------------------------------------------------------------


// let fileGetter = (method, link) => {

//     let request1 = new XMLHttpRequest();
//     request1.open(method, link, false);

//     request1.onprogress = (event) => {
//         if (event.lengthComputable) {
//             console.log(`Получено ${event.loaded} из ${event.total} байт`)
//         } else (`Получено ${event.loaded} байт`)
//     }

//     request1.onload = () => {
//         if (request1.status != 200) {
//             console.log(`Ошибка ${request1.status}: ${request1.statusText}`)
//         } else {
//             console.log(`Готово, данные получены: \n\n  ${request1.getAllResponseHeaders()} \n\n ${request1.response}`)
//         }
//     }

//     request1.onerror = () => {
//         console.log(`Не удалось осуществить запрос данных`);
//     }

//     request1.send();

// }

// fileGetter('GET', './someFolder/someHTML.html');


// КОНЕЦ КОДА ЗАДАНИЯ 1 -------------------------------------------------------------------------------------------------------------------------------------------------



