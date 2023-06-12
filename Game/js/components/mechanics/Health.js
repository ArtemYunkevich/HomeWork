import CONFIG from "../../config.js";
const { FIELD_HEIGHT } = CONFIG;

export class Health {
    constructor() {
        this.currentHP = 100;
        this.maxHP = 100;
        this.backgroundColor = 'red';
    }

    roadDamage(road, player) {
        if ((player.left < road.left[FIELD_HEIGHT - 2]) || player.left > (road.left[FIELD_HEIGHT - 2] + road.width + 1)) {
            this.currentHP -= 5;
        }
    }

    update() {
        if (this.currentHP <= 0) {
            const evt = new Event('endGame');
            document.dispatchEvent(evt);
        }
    }

    healthRestore(medkit, player) {

        // let healSound = new Audio('./sounds/healUp.mp3');

        // логика восстановления здоровья при подборе аптечки
        medkit.arrayMedkits.forEach((medkit) => {
            if (((medkit.x == player.left || medkit.x == (player.left + 1)) && (medkit.y == (CONFIG.FIELD_HEIGHT - 3) || medkit.y == (CONFIG.FIELD_HEIGHT - 2)))) {
                this.currentHP += CONFIG.HEALTH_RESTORE_MEDKIT;
                
                const evt = new Event('healUp');
                document.dispatchEvent(evt);

                if (this.currentHP > this.maxHP) {
                    this.currentHP = 100;
                };
                // healSound.play();
            }
        })

        // стирает аптечки при подборе - по идее лучше вынести в другое место куда-то
        medkit.arrayMedkits = medkit.arrayMedkits.filter((medkit) => {
            return (medkit.x != player.left && medkit.x != (player.left + 1)) || (medkit.y != (CONFIG.FIELD_HEIGHT - 3) && medkit.y != (CONFIG.FIELD_HEIGHT - 2));
        })
    }

    healthDamage(spikes, player) {

        // let damageSound = new Audio('./sounds/damage.mp3');

        spikes.arraySpikes.forEach((spike) => {
            if (((spike.x == player.left || spike.x == (player.left + 1)) && (spike.y == (CONFIG.FIELD_HEIGHT - 3) || spike.y == (CONFIG.FIELD_HEIGHT - 2)))) {
                this.currentHP -= CONFIG.HEALTH_DAMAGE_SPIKES / 2;

                const evt = new Event('spikeDamage');
                document.dispatchEvent(evt);

                if (this.currentHP <= 0) {
                    this.currentHP = 0;
                };
                // damageSound.play();
            }
        })
    }
}