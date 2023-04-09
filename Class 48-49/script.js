'use strict'

// ЗАНЯТИЕ 46-47 - События. Координаты на странице.


// ЗАДАНИЕ 1.1 (Презентация): Сделайте так, чтобы по нажатию на кнопку выводился alert

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let button = document.createElement("input");
// button.setAttribute("type", "button");
// button.setAttribute("value", "Просто текст");
// document.body.appendChild(button);

// button.addEventListener('click', () => {
//     alert('Приветствую');
// })

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 1.2 (Презентация): Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button.

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let button = document.createElement("input");
// button.setAttribute("type", "button");
// button.setAttribute("value", "Просто текст");
// document.body.appendChild(button);

// button.addEventListener('click', () => {
//     button.setAttribute("value", "button");
// })

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 1.3 (Презентация): Создайте форму с полем для ввода и двумя кнопками «enable» и «disable». 
//                          Сделайте так, чтобы по нажатию на кнопку «disable» поле становилось неактивным, на «enable» — активным.

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let form = document.createElement("form");
// document.body.appendChild(form);

// let input = document.createElement("input");
// input.setAttribute("type", "text");
// input.style.display = "block";
// input.style.marginBottom = "20px";
// form.appendChild(input);

// let buttonDisabler = document.createElement("input");
// buttonDisabler.setAttribute("type", "button");
// buttonDisabler.setAttribute("value", "Disable");
// buttonDisabler.style.marginLeft = "10px";
// form.appendChild(buttonDisabler);

// let buttonEnabler = document.createElement("input");
// buttonEnabler.setAttribute("type", "button");
// buttonEnabler.setAttribute("value", "Enable");
// buttonEnabler.style.marginLeft = "10px";
// form.appendChild(buttonEnabler);

// buttonDisabler.addEventListener('click', () => {
//     input.setAttribute("disabled","");
// })
// buttonEnabler.addEventListener('click', () => {
//     input.removeAttribute("disabled","");
// })

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 1.4 (Презентация): Создайте объект произвольной формы и цвета. Сделайте так, чтобы объект можно было двигать, 
//                          а его координаты на странице выводились в HTML-элементе output.


// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let object = document.createElement('div');
// object.style.width = "100px";
// object.style.height = "100px";
// object.style.backgroundColor = "red";
// object.style.position = "absolute";
// object.style.left = "0";
// object.style.top = "0";
// document.body.appendChild(object);

// let coordinates = document.createElement('output');
// coordinates.style.position = 'absolute';
// coordinates.style.right = '50px';
// document.body.appendChild(coordinates);
// coordinates.innerHTML = "Координаты блока - Х:  Y:";


// object.addEventListener('mousedown', () => {
//     object.addEventListener('mousemove', dragObject);
// });

// object.addEventListener('mouseup', () => {
//     object.removeEventListener('mousemove', dragObject);
// })


// let dragObject = (evt) => {
//     object.style.left = evt.clientX - object.offsetWidth / 2 + 'px';
//     object.style.top = evt.clientY - object.offsetHeight / 2 + 'px';
//     let posX = evt.clientX - object.offsetWidth / 2;
//     let posY = evt.clientY - object.offsetHeight / 2;
//     coordinates.innerHTML = 'Координаты блока - X: ' + posX + " : Y: " + posY;
// }

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2.1 (Презентация): Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let object = document.createElement('div');
// object.style.width = "500px";
// object.style.height = "500px";
// object.style.backgroundColor = "wheat";
// object.style.position = "absolute";
// object.style.left = "670px";
// object.style.top = "0";
// document.body.appendChild(object);

// let output = document.createElement('div');
// output.style.width = "490px";
// output.style.height = "100px";
// output.style.border = "thick solid #0000FF";
// output.style.position = "absolute";
// output.style.left = "670px";
// output.style.top = "500px";
// output.style.textAlign = "center";
// object.after(output);

// let coordinates = document.createElement('output');
// output.appendChild(coordinates);
// coordinates.innerHTML = "Координаты мыши внутри блока - Х:  Y:";

// object.addEventListener('mouseover', () => {
//     object.addEventListener('mousemove', showCoordinates);
// })

// object.addEventListener('mouseout', () => {
//     coordinates.innerHTML = "Координаты мыши внутри блока - Х:  Y:";
// })

// let showCoordinates = (evt) => {
//     let posX = evt.clientX - object.offsetLeft;
//     let posY = evt.clientY;
//     coordinates.innerHTML = 'Координаты блока - X: ' + posX + " : Y: " + posY;
// }


// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2.2 (Презентация): Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки.
//                            Добавьте событие, которое выполняется при двойном клике на блоке и заменяет фон блока на изображение открытой папки

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

// let object1 = document.createElement('div');
// object1.style.width = "120px";
// object1.style.height = "120px";
// object1.style.border = "1px solid black";
// object1.style.backgroundImage = "url('images/closed.png')"
// object1.style.backgroundSize = "90px";
// object1.style.backgroundRepeat = "no-repeat";
// object1.style.backgroundPosition = 'center';

// let object2 = document.createElement('div');
// object2.style.width = "120px";
// object2.style.height = "120px";
// object2.style.border = "1px solid black";
// object2.style.backgroundImage = "url('images/open.png')"
// object2.style.backgroundSize = "90px";
// object2.style.backgroundRepeat = "no-repeat";
// object2.style.backgroundPosition = 'center';
// object2.style.display = 'none';

// document.body.appendChild(object1);
// document.body.appendChild(object2);

// object1.addEventListener('dblclick', () => {
//     object1.style.display = 'none';
//     object2.style.display = 'block';

// })

// object2.addEventListener('dblclick', () => {
//     object2.style.display = 'none';
//     object1.style.display = 'block';

// })


// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 2.3 (Презентация): Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px, и цветом фона.
//                            Добавление элементов выполните с помощью цикла.
//                            Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border-radius до круга.
//                            Для замедления эффекта скругления в CSS можно добавить transition.


// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

let doc = document.body;
doc.style.display = 'flex';
doc.style.flexWrap = 'wrap';

for (let i = 1; i < 401; i++) {
    const smallDiv = document.createElement('div');
    smallDiv.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    smallDiv.style.width = '30px';
    smallDiv.style.height = '30px';
    smallDiv.style.display = 'inline-block';
    smallDiv.style.marginLeft = '20px';
    smallDiv.style.marginTop = '20px';
    smallDiv.innerHTML = i;
    smallDiv.style.border = "1px solid black";
    smallDiv.style.transition = 'all 0.5s ease-out';
    smallDiv.style.display = 'flex';
    smallDiv.style.justifyContent = 'center';
    smallDiv.style.alignItems = 'center';
    smallDiv.classList.add('colored');
    doc.appendChild(smallDiv);
}

doc.addEventListener('mouseover', (evt) => {
    if (evt.target.classList.contains('colored')) {
        evt.target.style.borderRadius = '30px';
        evt.target.style.cursor = 'pointer';
    }
    doc.addEventListener('mouseout', (evt) => {
        if (evt.target.classList.contains('colored')) {
            evt.target.style.borderRadius = '0px';
        }
    });
});

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
