// сервис, который хранит в себе данные о том, какая клавиша сейчас нажата

export class InputService {
    #doc;
    constructor(doc) {
        this.#doc = doc;
        this.keyPress = {};
    }

    init() {
        this.#doc.addEventListener('keydown', (event) => {
            this.keyPress[event.code] = true;
            console.log(JSON.stringify(this.keyPress, null, 4))
        });
        this.#doc.addEventListener('keyup', (event) => {
            delete this.keyPress[event.code];
            console.log(JSON.stringify(this.keyPress, null, 4))
        });
    }
    
}