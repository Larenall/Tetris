function checkLost() {
    for (i = 30; i < 40; i++) {
        if (td[i].style.background !== '' &&
            td[i + 10].style.background !== '') {
            lost = true;
            resume = true;
            clearInterval(gear2);
            clearInterval(gear1);
            clearInterval(go);
            alert('You Lost');  //checks if you`ve lost and stop the game 
        }

    }
}

function pause() { //pauses and upauses the game and show a msg
    if (resume) {
        clearInterval(gear2);
        clearInterval(gear1);
        clearInterval(go);
        resume = false;
        for (i = 90; i < 100; i++) {
            td[i].textContent = pauseMsg[i - 90];
        }
    } else {
        engine();
        for (i = 90; i < 100; i++) {
            td[i].textContent = '';
        }
    }
}

function launch() {  //starts the game
    for (i = 90; i < 100; i++) {
            td[i].textContent = ''; //clears pause msg in case game was restarted while paused
        }
    lost = false
    if (bestValue < Number(pts[0].textContent)) {
        bestValue = Number(pts[0].textContent);
        best.textContent = 'Session record:' + bestValue;
    }
    pts[0].textContent = '0'

    clearInterval(gear2);  //needed for proper game unpasing and restarting
    clearInterval(gear1);
    clearInterval(go);

    period = prompt('Швидкість руху блоків в мс - default = 500');
    if (period === '' || isNaN(Number(period))) { period = 500; }
    startPoint = 34;
    for (i = 0; i < td.length; i++) {
        td[i].style.background = '';
    }
    engine();
}

function engine() {
    if (!lost) { //checks if u ahvent lost
        if (resume) { // checks
            block = previevBlock;
            color = previevColor  //get block № and its color from previev window
            previev()
            var checker = false;
            checkLost()
            period = period - period * 0.02;
        } else {
            resume = true;
        }
        go = setInterval(fall, period); //"go" make blocks fall

        if (switcher) {
            clearInterval(gear2);
            gear1 = setInterval(begin, period) //if block can fall anymore gears calculate and prepare everything for next block, check happens after each fall iteration
            switcher = false;
        } else {
            clearInterval(gear1);
            gear2 = setInterval(begin, period)
        }
    }
}

function begin() {
    if (breaker) {
        clearInterval(go);
        breaker = false
        startPoint = 34;
        for (j = 0; j < rows; j++) {
            for (i = 0; i < cols; i++) {
                if (td[(j * 10) + i].style.background === "") {  //checks the row if its not filled
                    checker = true; //true = not filled
                }
            }
            if (!checker) { //checker = false - row is filled and its drops all blocks above that row
                for (k = j; k > 0; k--) {
                    for (i = 0; i < cols; i++) {
                        td[(k * 10) + i].style.background = td[((k - 1) * 10) + i].style.background;
                    }
                }
                streak++; //counts how many row were filled after the fall of last block
            }
            checker = false; //resets checker for further checks
        }
        switch (streak) { //counts and give points
            case 1:
                pts[0].textContent = Number(pts[0].textContent) + 100 + '';
                break;
            case 2:
                pts[0].textContent = Number(pts[0].textContent) + 300 + '';
                break;
            case 3:
                pts[0].textContent = Number(pts[0].textContent) + 700 + '';
                break;
            case 4:
                pts[0].textContent = Number(pts[0].textContent) + 1500 + '';
                break;
            default:
        }
        streak = 0;
        engine();
        switcher = true;
    }
}
document.body.addEventListener('keydown',  //keybinds
    function(event) {
        if (event.code === 'KeyA') {
            goLeft()
        }
        if (event.code === 'KeyD') {
            goRight()
        }
        if (event.code === 'KeyS') {
            fall()
        }
        if (!event.repeat) {
            if (event.code === 'KeyW') {
                rotate()
            }
            if (event.code === 'KeyQ') {
                pause()
            }
            if (event.code === 'KeyR') {
                launch()
            }
        }
    });