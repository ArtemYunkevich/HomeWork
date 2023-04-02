'use strict'

// ЗАНЯТИЕ 46-47 - Работа с DOM. Часть вторая из презентации.


// ЗАДАНИЕ 1 (Презентация): Нужно создать пустой html документ и заполнить его используя различные методы работы с документом. 
// Сделайте красными все внешние ссылки (имеющие начало с http://), поменяйте местами два произвольных элемента списка

// КОД ЗАДАНИЯ ---------------------------------------------------------------------------------------------------------------------------------------------------------

let spisok = document.createElement("ul");
document.body.appendChild(spisok);
let liCreation = () => {
    let result = [];
    let links = ["http://google.com", "/tutorial", "local/path", "ftp://ftp.com/my.zip", "http://nodejs.org", "http://internal.com/test"];
    let inners = ["http://google.com", "/tutorial.html", "local/path", "ftp://ftp.com/my.zip", "http://nodejs.org", "http://internal.com/test"];

    for (let i = 0; i < 6; i++) {
        const testLi = document.createElement("li");
        const testA = document.createElement("a");
        testA.setAttribute("href", links[i]);
        testA.innerHTML = inners[i];
        testLi.appendChild(testA);
        result.push(testLi);
    }
    return result;
}

for (let i = 0; i < 6; i++) {
    spisok.appendChild(liCreation()[i]);
}

let externalLinks = document.querySelectorAll("[href*=\"http://\"]");
for (let i = 0; i < externalLinks.length; i++) {
    const a = externalLinks[i];
    a.style.color = "red";
}

let link1 = document.querySelectorAll("li")[0];
let dummy = document.createElement("li");
let link2 = document.querySelectorAll("li")[4];

link2.before(dummy);
link1.before(link2);
dummy.replaceWith(link1);

// КОНЕЦ КОДА ЗАДАНИЯ -------------------------------------------------------------------------------------------------------------------------------------------------


