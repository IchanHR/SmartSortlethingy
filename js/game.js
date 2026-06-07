(() => {
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // State
    let selectedLevel = 0;
    let currentRound = 0;
    let score = 0;
    let totalAnswered = 0;
    let timerInterval = null;
    let timeLeft = 0;
    let roundStartTime = 0;
    let responseTimes = [];
    let unlockedLevels = JSON.parse(localStorage.getItem("ss_unlocked") || "[1]");
    let highScores = JSON.parse(localStorage.getItem("ss_highscores") || "{}");
    let draggables = [];

    // Elements
    const screenStart = $("#screen-start");
    const screenGame = $("#screen-game");
    const screenEnd = $("#screen-end");

    // ============ SCREENS ============
    function showScreen(screen) {
        [screenStart, screenGame, screenEnd].forEach(s => s.classList.remove("active"));
        screen.classList.add("active");
    }

    function showPhase(phaseId) {
        $$(".game-phase").forEach(p => p.classList.remove("active"));
        $(phaseId).classList.add("active");
    }

    // ============ START SCREEN ============
    function renderStartScreen() {
        const grid = $("#level-grid");
        grid.innerHTML = "";
        const totalLevels = LEVELS.length;
        for (let i = 1; i <= totalLevels; i++) {
            const btn = document.createElement("button");
            btn.className = "level-btn";
            btn.textContent = i;
            const unlocked = unlockedLevels.includes(i);
            if (!unlocked) btn.classList.add("locked");
            if (i === selectedLevel + 1) btn.classList.add("selected");
            btn.addEventListener("click", () => {
                if (!unlocked) return;
                AudioManager.click();
                selectedLevel = i - 1;
                renderStartScreen();
            });
            grid.appendChild(btn);
        }

        const hs = $("#high-score-display");
        const entries = Object.entries(highScores);
        if (entries.length > 0) {
            hs.textContent = "High Scores: " + entries.map(([k, v]) => {
                const lvl = LEVELS[parseInt(k) - 1];
                const total = lvl ? lvl.rounds.length : "?";
                return `L${k}: ${v}/${total}`;
            }).join(" | ");
        }
    }

    // ============ SCENE RENDERING ============
    function renderScene(container, round, useChanged) {
        container.innerHTML = "";
        const img = document.createElement("img");
        img.className = "scene-img";
        img.src = useChanged ? round.changedImg : round.originalImg;
        img.alt = useChanged ? "Changed scene" : "Original scene";
        img.draggable = false;
        container.appendChild(img);
    }

    // ============ GAME FLOW ============
    function startGame() {
        currentRound = 0;
        score = 0;
        totalAnswered = 0;
        responseTimes = [];
        showScreen(screenGame);
        startRound();
    }

    function startRound() {
        const level = LEVELS[selectedLevel];
        const round = level.rounds[currentRound];

        $("#round-info").textContent = `Round ${currentRound + 1} of ${level.rounds.length}`;
        updateScore();

        // Render first image
        renderScene($("#scene-original"), round, false);

        showPhase("#phase-observe");

        // Animate in
        gsap.fromTo("#image-original", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5 });
        gsap.fromTo("#timer-box", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, delay: 0.2 });

        // Start timer
        timeLeft = level.timerSeconds;
        $("#timer-value").textContent = timeLeft;
        $("#timer-value").classList.remove("urgent");
        $("#timer-bar").style.width = "100%";
        $("#timer-bar").classList.remove("urgent");

        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            $("#timer-value").textContent = timeLeft;
            $("#timer-bar").style.width = (timeLeft / level.timerSeconds * 100) + "%";

            if (timeLeft <= 3) {
                $("#timer-value").classList.add("urgent");
                $("#timer-bar").classList.add("urgent");
                AudioManager.timeWarning();
            } else {
                AudioManager.tick();
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                enterComparePhase();
            }
        }, 1000);
    }

    function enterComparePhase() {
        clearInterval(timerInterval);
        const level = LEVELS[selectedLevel];
        const round = level.rounds[currentRound];

        renderScene($("#scene-b"), round, true);

        // Set hitbox
        const hitbox = $("#hitbox");
        hitbox.style.left = round.hitbox.x;
        hitbox.style.top = round.hitbox.y;
        hitbox.style.width = round.hitbox.w;
        hitbox.style.height = round.hitbox.h;
        hitbox.className = "hitbox";
        $("#drop-zone-wrong").className = "drop-zone-wrong";

        // Render categories
        const panel = $("#categories-panel");
        panel.innerHTML = "";
        destroyDraggables();

        round.categories.forEach(cat => {
            const card = document.createElement("div");
            card.className = "category-card";
            card.textContent = cat;
            card.dataset.category = cat;
            panel.appendChild(card);
        });

        showPhase("#phase-compare");

        // Animate
        gsap.fromTo("#scene-b", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
        gsap.fromTo(".category-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, delay: 0.3 });

        roundStartTime = Date.now();

        // Setup drag
        setTimeout(setupDragAndDrop, 500);
    }

    function setupDragAndDrop() {
        const hitbox = $("#hitbox");
        const cards = $$(".category-card");

        // Hover hint on hitbox
        const wrongZone = $("#drop-zone-wrong");

        cards.forEach(card => {
            const d = Draggable.create(card, {
                type: "x,y",
                zIndexBoost: true,
                onDragStart() {
                    card.classList.add("dragging");
                    AudioManager.swoosh();
                },
                onDrag() {
                    if (isOverElement(card, hitbox)) {
                        hitbox.classList.add("drag-over");
                    } else {
                        hitbox.classList.remove("drag-over");
                    }
                },
                onDragEnd() {
                    card.classList.remove("dragging");
                    hitbox.classList.remove("drag-over");

                    if (isOverElement(card, hitbox)) {
                        checkAnswer(card.dataset.category, card, true);
                    } else if (isOverElement(card, wrongZone)) {
                        checkAnswer(card.dataset.category, card, false);
                    } else {
                        gsap.to(card, { x: 0, y: 0, duration: 0.3, ease: "back.out(1.7)" });
                    }
                }
            });
            draggables.push(d[0]);
        });
    }

    function isOverElement(card, el) {
        const r1 = card.getBoundingClientRect();
        const r2 = el.getBoundingClientRect();
        const cx = r1.left + r1.width / 2;
        const cy = r1.top + r1.height / 2;
        return cx >= r2.left && cx <= r2.right && cy >= r2.top && cy <= r2.bottom;
    }

    function destroyDraggables() {
        draggables.forEach(d => d.kill());
        draggables = [];
    }

    function checkAnswer(category, card, droppedOnCorrectZone) {
        const round = LEVELS[selectedLevel].rounds[currentRound];
        const isCorrect = droppedOnCorrectZone && category === round.correctCategory;
        const elapsed = (Date.now() - roundStartTime) / 1000;
        responseTimes.push(elapsed);
        totalAnswered++;

        destroyDraggables();

        const hitbox = $("#hitbox");
        const wrongZone = $("#drop-zone-wrong");

        if (isCorrect) {
            score++;
            hitbox.classList.add("correct");
            card.classList.add("correct");
            AudioManager.correct();
        } else {
            if (!droppedOnCorrectZone) {
                wrongZone.classList.add("incorrect");
            } else {
                hitbox.classList.add("incorrect");
            }
            card.classList.add("incorrect");
            AudioManager.incorrect();
        }

        // Disable all cards
        $$(".category-card").forEach(c => {
            if (c !== card) {
                c.style.opacity = "0.4";
                c.style.pointerEvents = "none";
            }
            if (c.dataset.category === round.correctCategory && !isCorrect) {
                c.classList.add("correct");
                c.style.opacity = "1";
            }
        });

        updateScore();

        setTimeout(() => showFeedback(isCorrect, round.correctCategory, elapsed), 800);
    }

    function showFeedback(isCorrect, correctCategory, elapsed) {
        const content = $("#feedback-content");
        content.innerHTML = `
            <div class="feedback-icon">${isCorrect ? "✅" : "❌"}</div>
            <div class="feedback-text ${isCorrect ? "correct" : "incorrect"}">
                ${isCorrect ? "Correct!" : "Try Again"}
            </div>
            <div class="feedback-detail">
                ${isCorrect
                    ? `You identified the change as <strong>${correctCategory}</strong> in ${elapsed.toFixed(1)}s`
                    : `The correct category was <strong>${correctCategory}</strong>`}
            </div>
        `;
        showPhase("#phase-feedback");
        gsap.fromTo("#feedback-content", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3 });

        const level = LEVELS[selectedLevel];
        const isLast = currentRound >= level.rounds.length - 1;
        const btn = $("#btn-next");
        btn.textContent = isLast ? "See Results" : "Next Round";
    }

    function nextRound() {
        const level = LEVELS[selectedLevel];
        currentRound++;
        if (currentRound >= level.rounds.length) {
            endGame();
        } else {
            startRound();
        }
    }

    function updateScore() {
        const level = LEVELS[selectedLevel];
        $("#score-display").textContent = `Score: ${score} / ${totalAnswered}`;
    }

    function endGame() {
        const level = LEVELS[selectedLevel];
        const total = level.rounds.length;
        const lvl = selectedLevel + 1;
        const avgTime = responseTimes.length > 0
            ? (responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length).toFixed(1)
            : "0.0";

        $("#end-heading").textContent = score >= 1 ? "Level Complete!" : "Try Again!";
        const scoreEl = $("#end-score-value");
        scoreEl.textContent = score >= 1 ? "Correct!" : "Wrong!";
        scoreEl.className = "end-score-value " + (score >= 1 ? "correct" : "wrong");
        $("#end-accuracy").textContent = `Level ${lvl}: ${level.name}`;
        $("#end-avg-time").textContent = `Response time: ${avgTime}s`;

        // Save high score
        if (!highScores[lvl] || score > highScores[lvl]) {
            highScores[lvl] = score;
            localStorage.setItem("ss_highscores", JSON.stringify(highScores));
        }

        // Unlock next level
        const minToUnlock = Math.ceil(total / 2);
        if (score >= minToUnlock && lvl < LEVELS.length && !unlockedLevels.includes(lvl + 1)) {
            unlockedLevels.push(lvl + 1);
            localStorage.setItem("ss_unlocked", JSON.stringify(unlockedLevels));
        }

        // Show/hide Next Level button
        const nextLevelBtn = $("#btn-next-level");
        if (score >= minToUnlock && lvl < LEVELS.length) {
            nextLevelBtn.style.display = "inline-block";
        } else {
            nextLevelBtn.style.display = "none";
        }

        showScreen(screenEnd);
        if (score >= 1) {
            AudioManager.levelComplete();
        } else {
            AudioManager.incorrect();
        }
        gsap.fromTo(".end-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
    }

    // ============ EVENT LISTENERS ============
    $("#btn-start").addEventListener("click", () => {
        AudioManager.click();
        startGame();
    });

    $("#btn-next").addEventListener("click", () => {
        AudioManager.click();
        nextRound();
    });

    $("#btn-play-again").addEventListener("click", () => {
        AudioManager.click();
        startGame();
    });

    $("#btn-next-level").addEventListener("click", () => {
        AudioManager.click();
        if (selectedLevel < LEVELS.length - 1) {
            selectedLevel++;
        }
        startGame();
    });

    $("#btn-main-menu").addEventListener("click", () => {
        AudioManager.click();
        renderStartScreen();
        showScreen(screenStart);
    });

    $("#btn-exit").addEventListener("click", () => {
        AudioManager.click();
        clearInterval(timerInterval);
        destroyDraggables();
        renderStartScreen();
        showScreen(screenStart);
    });

    // Init
    renderStartScreen();
})();
