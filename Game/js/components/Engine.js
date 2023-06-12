// движок игры - фрагмент, запускающий апдейт-функции всех компонентов каждый кадр

export class Engine {
    constructor(game) {
        this.game = game;
    }

    update() {
        this.game.road.update();
        this.game.score.update();
        
        this.game.health.roadDamage(this.game.road, this.game.player);
        this.game.health.update();

        this.game.medkits.update(this.game.road);
        this.game.spikes.update(this.game.road);
        this.game.health.healthRestore(this.game.medkits, this.game.player);
        this.game.health.healthDamage(this.game.spikes, this.game.player);

        this.game.drawService.clearField();
        this.game.drawService.clearHealth();
        this.game.drawService.clearLeaderboards();

        this.game.drawService.drawRoad(this.game.road);
        this.game.drawService.drawPlayer(this.game.player);
        this.game.drawService.drawScore(this.game.score, this.game.record);
        this.game.drawService.drawRecord(this.game.record);
        this.game.drawService.drawLeaderboards();
        this.game.drawService.drawHealth(this.game.health);
        this.game.drawService.drawMedkits(this.game.medkits);
        this.game.drawService.drawSpikes(this.game.spikes);
    }
}