import CONFIG from "../../config.js";
import { Bonus } from "./Bonus.js";


export class Medkits {
    constructor() {
        this.arrayMedkits = []
        this.imageSource = 'url(./images/medkit.png)'; // вынести потом в отдельный модуль
    }
    init() {

    }

    update(road) {
        if (Math.random() < CONFIG.PROBABILITY_MEDKIT) {
            this.arrayMedkits.push(new Bonus(Math.trunc(Math.random() * road.width + road.left[0]), 0, CONFIG.HEALTH_RESTORE_MEDKIT))
        }
        this.arrayMedkits.forEach((medkit) => {
            medkit.y++;
        })
        this.arrayMedkits = this.arrayMedkits.filter((medkit) => {
            return medkit.y < CONFIG.FIELD_HEIGHT;
        })
    }
}