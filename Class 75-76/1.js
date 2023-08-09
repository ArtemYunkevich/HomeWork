console.log('start');
console.time('s');

const gl_textEl = document.querySelector('#gl_text');
const btn = document.querySelector('button#getText');
const btn2 = document.querySelector('button#getText2');
const btn3 = document.querySelector('button#getText3');

const BASE_URL = 'http://127.0.0.1:3001';

let gl_text = '';

// Исходная функция

btn.addEventListener('click', event => {

    fetch(BASE_URL + '/count')
        .then(data => data.text())
        .then(data => {
            const count = Number(data);
            console.time('t2');
            readText(0, count);
            console.timeEnd('t2');
        })
})

function readText(i, count) {
    if (i == count) return;
    fetch(BASE_URL + '/word?index=' + i)
        .then((data) => {
            console.log(data);
            return data.json()
        })
        .then((data) => {
            console.log(data);
            gl_text += data.word + ' ';
            gl_textEl.innerHTML = gl_text.replace(/\n/g, '<br>');
            readText(i + 1, count);
        })
        .catch(err => {
            console.log('ERRORRRRR!!!!!!!!!!!!!!', err)
        });
}


// Задание 1 - Promise.all

btn2.addEventListener('click', event => {

    let promiseArray = [];


    fetch(BASE_URL + '/count')
        .then(data => data.text())
        .then(data => {
            const count = Number(data);
            console.time('t2');

            for (let i = 0; i < count; i++) {
                promiseArray[i] = fetch(BASE_URL + '/word?index=' + i)
                .then((data) => data.json())
            }

            return promiseArray

        })
        .then(data => {

            Promise.all(promiseArray)
            .then((data) => {
                data.forEach(el => {
                    gl_text += el.word + ' ';
                    gl_textEl.innerHTML = gl_text.replace(/\n/g, '<br>');
                })
            })
        })

    

})

// Задание 2 - через функцию, использующую uuid

btn3.addEventListener('click', event => {

    fetch(BASE_URL + '/listStart')
        .then(data => data.json())
        .then(data => {
            const count = Number(data);
            console.time('t2');
            readTextWithUUID(data.start);
            console.log(data);
            console.timeEnd('t2');
        })


})

function readTextWithUUID(uuid) {

    fetch(BASE_URL + '/listItem?uuid=' + uuid)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            if (!data.hasOwnProperty('value')) return;
            console.log(data);
            gl_text += data.value.word + ' ';
            gl_textEl.innerHTML = gl_text.replace(/\n/g, '<br>');
            readTextWithUUID(data.value.next);
        })
        .catch(err => {
            console.log('ERRORRRRR!!!!!!!!!!!!!!', err)
        });
}

console.log('end');
console.timeEnd('s');