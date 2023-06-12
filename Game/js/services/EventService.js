// сервис, который следит за всеми всплывающими событиями в игре - в данном случае ждет, когда наступит событие "Конец игры" и запускает соответствущую функцию

export class EventService {
    constructor(game) {
        this.game = game;
    }

    init() {
        document.addEventListener('endGame', (event) => {
            console.log(event);
            this.game.endGame();
        })
    }
}