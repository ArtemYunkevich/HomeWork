import CONFIG from '../config.js';


export class DrawService {
    constructor(fieldElement, healthElement, scoreElement, recordElement, leaderboardsElement) {
        this.fieldElement = fieldElement;
        this.healthElement = healthElement;
        this.scoreElement = scoreElement;
        this.recordElement = recordElement;
        this.leaderboardsElement = leaderboardsElement;
    }

    // тут инициализируется рисовалка - размер поля и фон за дорогой
    init() {
        this.fieldElement.style.backgroundColor = 'green'; // вынести в модуль дороги хотя бы
        this.fieldElement.style.width = CONFIG.FIELD_WIDTH * CONFIG.FIELD_BLOCK_SIZE + 'px';
        this.fieldElement.style.height = CONFIG.FIELD_HEIGHT * CONFIG.FIELD_BLOCK_SIZE + 'px';
    }


    // тут рисуется дорога

    drawRoad(road) {
        for (let y = 0; y < CONFIG.FIELD_HEIGHT; y++) {
            const roadBlock = document.createElement('div');
            roadBlock.style.width = road.width * CONFIG.FIELD_BLOCK_SIZE + 'px';
            roadBlock.style.height = CONFIG.FIELD_BLOCK_SIZE + 'px';

            roadBlock.style.position = 'absolute';
            roadBlock.style.left = road.left[y] * CONFIG.FIELD_BLOCK_SIZE + 'px';
            roadBlock.style.top = y * CONFIG.FIELD_BLOCK_SIZE + 'px';
            roadBlock.style.backgroundColor = road.backgroundColor;

            this.fieldElement.append(roadBlock);

            // const whiteStripe = document.createElement('div');
            // whiteStripe.style.width = road.width * CONFIG.FIELD_BLOCK_SIZE / 20 + 'px';
            // whiteStripe.style.height = CONFIG.FIELD_BLOCK_SIZE + 'px';
            // whiteStripe.style.backgroundColor = 'white';
            // whiteStripe.style.position = 'absolute';
            // whiteStripe.style.left = road.width * CONFIG.FIELD_BLOCK_SIZE / 2 + 'px';
            // roadBlock.append(whiteStripe);

        }
    }

    // тут производится очистка поля игры и шкалы здоровья перед повторной отрисовкой кадра

    clearField() {
        this.fieldElement.innerHTML = '';
    }

    clearHealth() {
        this.healthElement.innerHTML = '';
    }
    clearLeaderboards() {
        this.leaderboardsElement.innerHTML = '';
    }

    // тут рисуется моделька игрока

    drawPlayer(player) {
        const playerDiv = document.createElement('div');
        playerDiv.style.width = 2 * CONFIG.FIELD_BLOCK_SIZE + 'px';
        playerDiv.style.height = 2 * CONFIG.FIELD_BLOCK_SIZE + 'px';

        playerDiv.style.position = 'absolute';
        playerDiv.style.left = player.left * CONFIG.FIELD_BLOCK_SIZE + 'px';
        playerDiv.style.top = (CONFIG.FIELD_HEIGHT - 3) * CONFIG.FIELD_BLOCK_SIZE + 'px';

        // playerDiv.style.backgroundColor = player.model.backgroundColor;
        playerDiv.style.backgroundImage = player.model.imageSource;
        playerDiv.style.backgroundPosition = 'center';
        playerDiv.style.backgroundSize = '120%';

        this.fieldElement.append(playerDiv);
    }

    drawScore(score, record) {
        this.scoreElement.innerText = `${record.name} current score: ${score.points}`;
    }

    drawRecord(record) {
        try {
            const recordStorage = JSON.parse(localStorage.getItem('Record'));
            let sortedStorage = recordStorage.sort((a, b) => b.score - a.score).filter((el) => el.name == record.name);
            this.recordElement.innerText = `${record.name} max record: ${sortedStorage[0].score}`;
        } catch {
            this.recordElement.innerText = `${record.name} max record: 0`
        }
    }

    drawLeaderboards() {
        try {
            const top10Caption = document.createElement('div');
            top10Caption.style.display = 'flex';
            top10Caption.style.justifyContent = 'space-around';
            top10Caption.style.border = '1px solid black';
            top10Caption.style.fontWeight = '700';
            this.leaderboardsElement.appendChild(top10Caption);

            const top10NumberCaption = document.createElement('div');
            top10NumberCaption.innerHTML = 'Number';
            top10NumberCaption.style.borderRight = '1px solid black';
            top10NumberCaption.style.flex = '25%';
            top10Caption.appendChild(top10NumberCaption);
            
            const top10NameCaption = document.createElement('div');
            top10NameCaption.innerHTML = 'Player Name';
            top10NameCaption.style.borderRight = '1px solid black';
            top10NameCaption.style.flex = '55%';
            top10Caption.appendChild(top10NameCaption);
            
            const top10ScoreCaption = document.createElement('div');
            top10ScoreCaption.innerHTML = 'Score';
            top10ScoreCaption.style.flex = '20%';
            top10Caption.appendChild(top10ScoreCaption);

            const recordStorage = JSON.parse(localStorage.getItem('Record'));
            let sortedStorage = recordStorage.sort((a, b) => b.score - a.score);
            let top10 = sortedStorage.splice(0,10);
            top10.forEach((el, idx) => {
                const top10Div = document.createElement('div');
                top10Div.style.display = 'flex';
                top10Div.style.justifyContent = 'space-around';
                top10Div.style.border = '1px solid black';
                this.leaderboardsElement.appendChild(top10Div);

                const top10NumberDiv = document.createElement('div');
                top10NumberDiv.innerHTML = idx + 1;
                top10NumberDiv.style.borderRight = '1px solid black';
                top10NumberDiv.style.flex = '25%';
                top10Div.appendChild(top10NumberDiv);
                
                const top10NameDiv = document.createElement('div');
                top10NameDiv.innerHTML = el.name;
                top10NameDiv.style.borderRight = '1px solid black';
                top10NameDiv.style.flex = '55%';
                top10Div.appendChild(top10NameDiv);
                
                const top10ScoreDiv = document.createElement('div');
                top10ScoreDiv.innerHTML = el.score;
                top10ScoreDiv.style.flex = '20%';
                top10Div.appendChild(top10ScoreDiv);
            })
        } catch {
            this.leaderboardsElement.innerText = 'There are no records yet';
        }
    }

    drawHealth(health) {
        const healthDiv = document.createElement('div');

        healthDiv.style.width = (health.currentHP * 3) + 'px';
        healthDiv.style.height = '24px';
        healthDiv.style.position = 'absolute';
        healthDiv.style.backgroundColor = health.backgroundColor;
        healthDiv.innerText = health.currentHP;

        this.healthElement.appendChild(healthDiv);
    }

    drawMedkits(medkits) {
        medkits.arrayMedkits.forEach((medkit) => {
            const medkitDiv = document.createElement('div');

            medkitDiv.style.width = CONFIG.FIELD_BLOCK_SIZE + 'px';
            medkitDiv.style.height = CONFIG.FIELD_BLOCK_SIZE + 'px';
            medkitDiv.style.position = 'absolute';
            medkitDiv.style.left = medkit.x * CONFIG.FIELD_BLOCK_SIZE + 'px';
            medkitDiv.style.top = medkit.y * CONFIG.FIELD_BLOCK_SIZE + 'px';

            // medkitDiv.style.backgroundColor = 'red';
            medkitDiv.style.backgroundImage = medkits.imageSource;
            medkitDiv.style.backgroundSize = 'cover';

            this.fieldElement.append(medkitDiv);
        })


    }

    drawSpikes(spikes) {
        spikes.arraySpikes.forEach((spike) => {
            const spikesDiv = document.createElement('div');

            spikesDiv.style.width = CONFIG.FIELD_BLOCK_SIZE + 'px';
            spikesDiv.style.height = CONFIG.FIELD_BLOCK_SIZE + 'px';
            spikesDiv.style.position = 'absolute';
            spikesDiv.style.left = spike.x * CONFIG.FIELD_BLOCK_SIZE + 'px';
            spikesDiv.style.top = spike.y * CONFIG.FIELD_BLOCK_SIZE + 'px';

            // spikesDiv.style.backgroundColor = 'black';
            spikesDiv.style.backgroundImage = spikes.imageSource;
            spikesDiv.style.backgroundSize = 'cover';

            this.fieldElement.append(spikesDiv);
        })


    }

    // тут рисуется окно проигрыша и кнопка "начать заново"
    drawEndGame() {
        setTimeout(() => {
            console.log(this);
            const endGameFrame = document.createElement('div');
            endGameFrame.style.position = 'relative';
            endGameFrame.style.top = '200px';
            endGameFrame.style.height = '300px';
            endGameFrame.style.width = '400px';
            endGameFrame.style.backgroundImage = 'url(./images/gameover.gif)';
            endGameFrame.style.backgroundSize = 'cover';
            endGameFrame.style.zIndex = '1';
            endGameFrame.style.display = 'flex';
            endGameFrame.style.justifyContent = 'center';

            this.fieldElement.appendChild(endGameFrame);

            const endGamePhrase = document.createElement('a');
            endGamePhrase.setAttribute('href', "index.html");
            endGamePhrase.style.display = 'flex';
            endGamePhrase.style.justifyContent = 'center';
            endGamePhrase.style.alignItems = 'center';
            endGamePhrase.style.borderRadius = '30px';
            endGamePhrase.style.width = '150px';
            endGamePhrase.style.height = '40px';
            endGamePhrase.style.backgroundColor = 'black';
            endGamePhrase.style.cursor = 'pointer';
            endGamePhrase.style.textDecoration = 'none';
            endGamePhrase.innerText = 'Play again';
            endGamePhrase.style.position = 'absolute';
            endGamePhrase.style.bottom = '10px';
            endGamePhrase.style.color = 'white';
            endGamePhrase.style.fontSize = '20px';
            endGamePhrase.style.fontWeight = '700';
            endGamePhrase.style.fontFamily = 'Brush Script MT, cursive';
            endGamePhrase.style.transition = 'all 0.3s linear';

            endGamePhrase.addEventListener('mouseover', () => {
                endGamePhrase.style.backgroundColor = 'red';
                endGamePhrase.addEventListener('mouseout', () => {
                    endGamePhrase.style.backgroundColor = 'black';
                });
            });

            endGameFrame.appendChild(endGamePhrase);
        }, 0)

    }


}