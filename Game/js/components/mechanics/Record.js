// здесь хранятся данные о рекорде

export class Record {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    
    init() {
        const recordStorage = JSON.parse(localStorage.getItem('Record'));
        if (recordStorage == null) {
            this.score = 0;
        } else {
            const nameStorage = recordStorage.map((record) => record.name);
            const nameSet = new Set(nameStorage);
            if (!(this.name in nameSet)) {
                this.score = 0;
            } else {
                let sortedStorage = recordStorage.sort((a, b) => b.score - a.score).filter((record) => record.name == this.name);
                this.score = sortedStorage[0].score;
            }
        }
    }
    
    save(newScore, leaderStorage) {
        this.score = newScore;
        leaderStorage.leadersArray.push(this);
    }
}

// СТАРЫЙ КОД
    // export class Record {
    //     constructor(userName) {
    //         this.userName = userName;
    //         this.currentRecord = 0;
    //     }
    
    //     init() {
    //         console.log(JSON.stringify(this))
    //         const record = JSON.parse(localStorage.getItem('Record'));
    //         if (record) {
    //             this.currentRecord = record.currentRecord;
    //         }
    //     }
    
    //     save(newScore) {
    //         if (newScore > this.currentRecord) {
    //             this.currentRecord = newScore;
    //             localStorage.setItem('Record', `${JSON.stringify(this)}`);
    //         }
    //     }
    // }
