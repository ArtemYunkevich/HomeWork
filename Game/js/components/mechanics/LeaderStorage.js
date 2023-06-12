export class LeaderStorage {
    constructor() {
        this.leadersArray = [];
    }

    init() {
        const record = JSON.parse(localStorage.getItem('Record'));
        if (record != null) {
            this.leadersArray = record;
        }
    }

    save() {
        localStorage.setItem('Record', `${JSON.stringify(this.leadersArray)}`);
    }
}