import CONFIG from "../../config.js";
import { Bonus } from "./Bonus.js";


export class Spikes {
    constructor() {
        this.arraySpikes = []
        this.imageSource = 'url(./images/spikes.png)'; // вынести потом в отдельный модуль
    }
    init() {

    }

    update(road) {
        if (Math.random() < CONFIG.PROBABILITY_SPIKES) {
            this.arraySpikes.push(new Bonus(Math.trunc(Math.random() * road.width + road.left[0]), 0, CONFIG.HEALTH_DAMAGE_SPIKES))
        }
        this.arraySpikes.forEach((spikes) => {
            spikes.y++;
        })
        this.arraySpikes = this.arraySpikes.filter((spikes) => {
            return spikes.y < CONFIG.FIELD_HEIGHT;
        })
    }
}