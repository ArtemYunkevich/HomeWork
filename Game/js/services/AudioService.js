export class AudioService {
    constructor(game) {
        this.game = game;
    }

    init() {
        this.healSound();
        this.spikeSound();
        this.endGameSound();
    }

    healSound() {
        document.addEventListener('healUp', () => {
            console.log('Healing!');

            const healSound = new Tone.Synth().toDestination();
            const now = Tone.now();
            healSound.triggerAttackRelease('G4', '32n', now);
            healSound.triggerAttackRelease('C5', '32n', now + 0.1);
        })
    }

    spikeSound() {
        document.addEventListener('spikeDamage', () => {
            console.log('Spikes!');

            const spikeSound = new Tone.Synth().toDestination();
            const now = Tone.now();
            spikeSound.triggerAttackRelease('C4', '32n', now);
            spikeSound.triggerAttackRelease('G3', '32n', now + 0.1);
            spikeSound.triggerAttackRelease('C3', '32n', now + 0.2);
        })
    }

    endGameSound() {
        document.addEventListener('endGame', () => {
            console.log('Game Over!');

            const endGameSound = new Tone.Synth().toDestination();
            const now = Tone.now();
            endGameSound.triggerAttackRelease('A3', '32n', now);
            endGameSound.triggerAttackRelease('A3', '32n', now + 0.5);
            endGameSound.triggerAttackRelease('A3', '32n', now + 0.85);
            endGameSound.triggerAttackRelease('A3', '32n', now + 1);
            endGameSound.triggerAttackRelease('C4', '32n', now + 1.5);
            endGameSound.triggerAttackRelease('B3', '32n', now + 1.85);
            endGameSound.triggerAttackRelease('B3', '32n', now + 2);
            endGameSound.triggerAttackRelease('A3', '32n', now + 2.35);
            endGameSound.triggerAttackRelease('A3', '32n', now + 2.5);
            endGameSound.triggerAttackRelease('A3', '32n', now + 2.85);
            endGameSound.triggerAttackRelease('A3', '32n', now + 3);

            const endGameSound2 = new Tone.MonoSynth({

            }).toDestination();
            endGameSound2.volume.value = -15;
            endGameSound2.triggerAttackRelease("A2", "8n", now);
            endGameSound2.triggerAttackRelease("F3", "8n", now + 0.5);
            endGameSound2.triggerAttackRelease("A2", "8n", now + 1);
            endGameSound2.triggerAttackRelease("F3", "8n", now + 1.5);
            endGameSound2.triggerAttackRelease("A2", "8n", now + 2);
            endGameSound2.triggerAttackRelease("F3", "8n", now + 2.5);
            endGameSound2.triggerAttackRelease("A2", "8n", now + 3);
        })
    }

}