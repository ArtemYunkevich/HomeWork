'use strict'
console.log(document.body)

// ЗАНЯТИЕ 46-47 - Работа с DOM. Задания из домашки.


{
    // ЗАДАНИЕ 1: Дан элемент #elem. Добавьте ему класс "www".

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

    let testDiv = document.querySelector("div");
    testDiv.classList.add("www");


    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------


    // ЗАДАНИЕ 2: Дан элемент #elem. Проверьте наличие у него класса “www”, если есть - удалите класс

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------


    testDiv.classList.contains("www") ? testDiv.classList.remove("www") : {};

    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
}

{
    // ЗАДАНИЕ 3: Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
    // а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body.

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

    let recursiveSearchTags = (tag) => {
        let massiv = [];
        let searchResult = document.body.querySelectorAll(tag);
        for (let i = 0; i < searchResult.length; i++) {
            massiv.push(searchResult[i]);
        }
        return massiv
    }

    console.log(recursiveSearchTags("div"));


    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
}

{

    // ЗАДАНИЕ 4: Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
    // Сделайте так, чтобы четные позиции имели красный фон.

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------


    let ulTask4 = document.querySelector(".ulForTask4");
    let typicalSpan1 = document.createElement("span");
    let typicalSpan2 = document.createElement("span");
    let typicalSpan3 = document.createElement("span");
    let typicalSpan4 = document.createElement("span");
    let typicalSpan5 = document.createElement("span");
    let typicalSpan6 = document.createElement("span");

    let massiv = [typicalSpan1, typicalSpan2, typicalSpan3, typicalSpan4, typicalSpan5, typicalSpan6];
    let names = ["первый", "второй", "третий", "четвертый", "пятый", "шестой"];

    for (let i = 0; i < massiv.length; i++) {
        const li = document.createElement("li");
        ulTask4.appendChild(li);
        massiv[i].innerHTML = names[i];
        massiv[i].style.display = "inline-block"
        li.appendChild(massiv[i]);
        i % 2 ? massiv[i].style.backgroundColor = "red" : {};

    }
}

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------

{
    // ЗАДАНИЕ 5: Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст ‘!’

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

    let ulTask5 = document.querySelector(".ulForTask5");

    let testSubject = ulTask5.children[2].previousElementSibling;
    testSubject.innerHTML += "!";

    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
}

{
    // ЗАДАНИЕ 6: . Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

    let wrapInParagraph = () => {

        let divCollection = document.querySelectorAll("div");
        divCollection.forEach((el) => {
            if (!(el.innerHTML == "")) {
                el.innerHTML = "<p>" + el.innerHTML + "</p>"
            }
        })

    }

    wrapInParagraph();

    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
}

{
    // ЗАДАНИЕ 7: . Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. 
    // В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию 
    // в camelCase нотацию: text-center => textCenter

    // КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

    let elements = document.body.querySelectorAll("*");
    elements.forEach((el) => {
        if (!(el.className == "")) {

            let defaultClasses = el.className.split(" ");
            let classes = el.className.split(" ");

            classes.forEach((el, idx, arr) => {
                let massiv = el.split("-");
                for (let i = 1; i < massiv.length; i++) {
                    let letters = massiv[i].split("");
                    letters[0] = letters[0].toUpperCase();
                    massiv[i] = letters.join("");
                }
                el = massiv.join("");
                arr[idx] = el;
            })

            for (let i = 0; i < defaultClasses.length; i++) {
                el.classList.replace(defaultClasses[i],classes[i]);
            }

        }
    })

    // КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------
}
