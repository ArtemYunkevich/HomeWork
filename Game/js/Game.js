import { InputService } from "./services/InputService.js";
import { DrawService } from "./services/DrawService.js";
import { Road } from "./components/Road.js";
import { Player } from "./components/Player.js";
import { Engine } from "./components/Engine.js";
import { EventService } from "./services/EventService.js";
import { Health } from "./components/mechanics/Health.js";
import { Score } from "./components/mechanics/Score.js";
import { Record } from "./components/mechanics/Record.js";
import { Medkits } from "./components/bonuses/MedkitsStorage.js";
import { Spikes } from "./components/bonuses/SpikeStorage.js";
import { LeaderStorage } from "./components/mechanics/LeaderStorage.js";
import { PlayerName } from "./components/PlayerName.js";
import { AudioService } from "./services/AudioService.js";

export class Game {
    constructor(doc) {
        // тут визуал
        this.fieldElement = doc.querySelector('.field');
        this.healthElement = doc.querySelector('.health-bar');
        this.scoreElement = doc.querySelector('.score-bar');
        this.recordElement = doc.querySelector('.record-bar');
        this.leaderboardsElement = doc.querySelector('.leaderboards-container');
        this.startWindow = doc.querySelector('.start-window');
        this.wrapper = doc.querySelector('.game-wrapper');

        // а тут сервисы
        this.eventService = new EventService(this);
        this.inputService = new InputService(doc);
        this.drawService = new DrawService(this.fieldElement, this.healthElement, this.scoreElement, this.recordElement, this.leaderboardsElement, this.startWindow);
        this.audioService = new AudioService(this);
    }

    startGame(doc) {
        this.wrapper.style.display = 'none';
        let playerName = "";
        const playerNameInput = doc.querySelector('#playerNameInput')
        const playerNameSubmit = doc.querySelector('#playerNameSubmit')
        playerNameSubmit.addEventListener('click', () => {
            playerName = playerNameInput.value;
            console.log(playerName)
            this.playerName = new PlayerName(playerName);
            this.init();
            this.timeout = setInterval(this.engine.update.bind(this.engine), 1000 / this.road.linesPerSecond, this)
            this.startWindow.style.display = 'none';
            this.wrapper.style.display = 'flex';
        })
    }

    init() {
        console.log('game start');

        // запускаются сервисы
        this.eventService.init();
        this.inputService.init();
        this.drawService.init();
        this.audioService.init();

        // запускаются компоненты игры
        this.road = new Road();
        this.road.init();

        this.player = new Player(this.road, this.inputService);
        this.player.init();

        this.score = new Score();
        this.record = new Record(this.playerName.name);
        this.leaderStorage = new LeaderStorage();
        this.record.init();
        this.leaderStorage.init();

        this.health = new Health();

        this.medkits = new Medkits();

        this.spikes = new Spikes();

        this.engine = new Engine(this);

    }

    endGame() {
        this.record.save(this.score.points, this.leaderStorage);
        this.leaderStorage.save();
        clearInterval(this.timeout);
        this.drawService.drawEndGame();
    }

} 