document.body.addEventListener('keydown',
    function(event) {
        if (event.key === 'a') {
            goLeft()
        }
        if (event.key === 'd') {
            goRight()
        }
        if (event.key === 'ф') {
            goLeft()
        }
        if (event.key === 'в') {
            goRight()
        }
        if (event.key === 's') {
            fall()
        }
        if (event.key === 'ы') {
            fall()
        }
        if (event.key === 'і') {
            fall()
        }
        if (!event.repeat) {
            if (event.key === 'w') {
                rotate()
            }
            if (event.key === 'q') {
                pause()
            }
            if (event.key === 'й') {
                pause()
            }
            if (event.key === 'r') {
                launch()
            }
            if (event.key === 'ц') {
                rotate()
            }
            if (event.key === 'к') {
                launch()
            }
        }
    });

function checkLost() {
    for (i = 0; i < 29; i++) {
        if (td[i].style.background !== '' && td[i + 10].style.background !== '') {
            alert('You Lost');
            resume = true;
            clearInterval(gear2);
            clearInterval(gear1);
            clearInterval(go);
            launch();
        }

    }
}

function pause() {
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

function launch() {
    if (bestValue < Number(pts[0].textContent)) {
        bestValue = Number(pts[0].textContent);
        best.textContent = 'Session record:' + bestValue;
    }
    pts[0].textContent = '0'
    clearInterval(gear2);
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
    console.log('engine')
    if (resume) {
        console.log('resumed')
        randBlock()
        var checker = false;
        color = randColor();
        period = period - period * 0.05;
    } else {
        checkLost()
        resume = true;
    }
    go = setInterval(fall, period);
    if (switcher) {
        clearInterval(gear2);
        gear1 = setInterval(begin, period)
        switcher = false;
    } else {
        clearInterval(gear1);
        gear2 = setInterval(begin, period)
    }
}

function begin() {
    console.log('begin')
    if (breaker) {
        clearInterval(go);
        breaker = false
        startPoint = 34;
        for (j = 0; j < rows; j++) {
            for (i = 0; i < cols; i++) {
                if (td[(j * 10) + i].style.background === "") {
                    checker = true;
                }
            }
            if (!checker) {
                for (k = j; k > 0; k--) {
                    for (i = 0; i < cols; i++) {
                        td[(k * 10) + i].style.background = td[((k - 1) * 10) + i].style.background;
                    }
                }
                streak++;
            }
            checker = false;
        }
        switch (streak) {
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