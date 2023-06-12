import CONFIG from "../config.js";

export class Road {
    constructor() {
        this.width = 10;
        this.leftStart = 7;
        this.left = [];
        this.leftPrevious = [];
        this.backgroundColor = '#bbb';
        this.linesPerSecond = 30;
    }

    // запускается инициализация, которая просчитывает изменение дороги относительно левой границы поля
    init() {
        this.left[0] = this.leftStart;
        for (let y = 1; y < CONFIG.FIELD_HEIGHT; y++) {
            this.left[y] = this.left[y - 1] + this.changeDirectionProbability();
            if (this.left[y] < 0) this.left[y] = 0;
            if (this.left[y] + this.width >= CONFIG.FIELD_WIDTH) this.left[y] = CONFIG.FIELD_WIDTH - this.width;
        }
        this.leftPrevious = [...this.left];
    }

    // функция, которая рассчитывает вероятность поворота дороги вправо или влево
    changeDirectionProbability() {
        const rnd = Math.random();
        return (rnd < CONFIG.PROBABILITY_LEFT) ? -1 : (rnd > CONFIG.PROBABILITY_LEFT + CONFIG.PROBABILITY_CENTER) ? 1 : 0;
    }

    // обновление координат дороги

    update() {
        for (let y = 1; y < CONFIG.FIELD_HEIGHT; y++) {
            this.left[y] = this.leftPrevious[y - 1];
        }
        this.left[0] = this.left[1] + this.changeDirectionProbability();
        if (this.left[0] < 0) {
            this.left[0] = 0;
        }
        if (this.left[0] + this.width >= CONFIG.FIELD_WIDTH) this.left[0] = CONFIG.FIELD_WIDTH - this.width;
        this.leftPrevious = [].concat(this.left);
    }
}