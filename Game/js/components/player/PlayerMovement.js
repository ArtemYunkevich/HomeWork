import CONFIG from "../../config.js"


// сюда вынесено все, что связано с передвижением игрока
export class PlayerMovement {
    constructor(player, inputService) {
        this.player = player;
        this.inputService = inputService;
    }

    init() {
        setInterval(() => {
            if ('KeyD' in this.inputService.keyPress)
                this.moveRight();
            if ('KeyA' in this.inputService.keyPress)
                this.moveLeft();
        }, 50)
    }

    moveLeft() {
        this.player.left--;
        if (this.player.left < 0) {
            this.player.left++;
        }
    }
    moveRight() {
        this.player.left++;
        if (this.player.left > (CONFIG.FIELD_WIDTH - 2)) {
            this.player.left--;
        }
    }
}