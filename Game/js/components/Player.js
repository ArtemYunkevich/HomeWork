import CONFIG from "../config.js";
import { PlayerMovement } from "./player/PlayerMovement.js";
import { PlayerModel } from "./player/PlayerModel.js";


// класс игрока
export class Player {
    constructor(road, InputService) {
        this.model = new PlayerModel();
        this.movement = new PlayerMovement(this, InputService);
        this.left = (road.width >> 1) + road.left[CONFIG.FIELD_HEIGHT - 1]; // пока непонятно
    }

    init() {
        this.movement.init();
    }
}