const AudioManager = (() => {
    let ctx;

    function getCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        return ctx;
    }

    function play(type, freq, duration, vol) {
        const c = getCtx();
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol || 0.15, c.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(c.currentTime);
        osc.stop(c.currentTime + duration);
    }

    return {
        tick() { play("sine", 800, 0.05, 0.08); },
        swoosh() {
            const c = getCtx();
            const osc = c.createOscillator();
            const gain = c.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(300, c.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, c.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, c.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(c.destination);
            osc.start(c.currentTime);
            osc.stop(c.currentTime + 0.2);
        },
        correct() {
            play("sine", 523, 0.15, 0.15);
            setTimeout(() => play("sine", 659, 0.15, 0.15), 100);
            setTimeout(() => play("sine", 784, 0.3, 0.15), 200);
        },
        incorrect() {
            play("square", 200, 0.15, 0.1);
            setTimeout(() => play("square", 150, 0.3, 0.1), 150);
        },
        click() { play("sine", 600, 0.06, 0.08); },
        timeWarning() { play("sine", 440, 0.1, 0.12); },
        levelComplete() {
            [523, 659, 784, 1047].forEach((f, i) => {
                setTimeout(() => play("sine", f, 0.25, 0.12), i * 150);
            });
        }
    };
})();
