// здесь хранятся данные об очках

export class Score {
    constructor() {
        this.points = 0;
    }

    update() {
        this.points++;
    }
}