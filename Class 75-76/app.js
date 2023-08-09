const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const { v4: uuidv4 } = require('uuid');

// for (let i = 0; i < 1000; i++) {
//     console.log(uuidv4());
// }


app.use(cors());

const { text } = require('./text.Data copy');
// console.log(text);

const textArray = text
    .trim()
    // .replace(/\n\n/g, '\n')
    .replace(/\n/g, '\n ')
    .split(' ');
// console.log(textArray)

const textObject = textArray.reduce((acc, el, idx) => {
    acc[idx] = el;
    return acc;
}, {});

const startUUID = uuidv4()
const textUUID_object = textArray.reduce((acc, el) => {
    const newNextId = uuidv4();
    acc[acc.nextId] = {
        word: el,
        next: newNextId
    };
    acc.nextId = newNextId;
    return acc;
}, { nextId: startUUID, start: startUUID })

delete textUUID_object.nextId;




console.log(textObject);
console.log(textUUID_object);


app.get('/', (req, res) => {

    setTimeout(() => {

        res.send(`
    <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Руслан и Людмила</title>
</head>
<body>
    <h1>ПУШКИН</h1>
    <time>${new Date()}</time>
</body>
</html>
    `);
    }, 5000);
})

app.get('/count', (req, res) => {
    console.log('get /count received');
    res.send('' + Object.keys(textObject).length);
})

app.post('/count', (req, res) => {
    console.log('post /count received');
    res.send('Вы отправили пост-запрос /count');
})

app.post('/newcount', (req, res) => {
    console.log('post /newcount received');
    res.send('Вы отправили пост-запрос /newcount');
})

app.get('/word', (req, res) => {
    console.log(req.query.index);
    const index = req.query.index;
    setTimeout(() => {
        res.json({ index, word: textObject[index] });
    }, Math.random() * 1)
})

app.get('/listItem', (req,res)=>{
    const uuid = req.query.uuid;
    setTimeout(() => {
        res.json({ value: textUUID_object[uuid] });
    }, Math.random() * 1)
});

app.get('/listStart', (req,res)=>{
    setTimeout(() => {
        res.json({ start: textUUID_object.start });
    }, Math.random() * 1)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})