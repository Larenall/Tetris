//===================================================================//
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tBody = document.createElement("tbody");
var controls = document.getElementById('controls')
var wrapper = document.getElementById('wrapper')
var rows = 23;
var cols = 10;
var startPoint = 34;
var color;
var pts = 0;
var streak = 0;
var breaker = false;
var switcher = false;
var resume = true;
var pauseMsg = 'GAMEPAUSED';
var bestValue = 0;
var gear2;
var gear1;
var go;
var period;


for (var j = 0; j < rows; j++) {
    var row = document.createElement("tr");
    for (var i = 0; i < cols; i++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode('');
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tBody.appendChild(row);
}
tbl.appendChild(tBody);
wrapper.insertBefore(tbl, controls);
tbl.setAttribute("border", "2");
//===================================================================//
var tr = document.getElementsByTagName('tr')
var td = document.getElementsByTagName('td')
var pts = document.getElementsByTagName('span')
var best = document.createElement('p');
var bestLoc = document.getElementById('points');

best.textContent = 'Session record:' + bestValue;
controls.insertBefore(best, bestLoc)
for (i = 0; i < td.length; i++) {
    if (i < 30) {
        td[i].setAttribute('class', 'hide')
    }
    // td[i].textContent=(i+1)+'';
}
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

function randColor() {
    color = 'hsl(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 20 + 40) + '%, ' + Math.round(Math.random() * 20 + 40) + '%)';
    return color;
}

function randBlock() {
    block = (Math.floor(Math.random() * 7)) * 10 + 1;
    return block
}

function rotate() {
    if (startPoint > 39) {
        switch (block) {
            case 1:
                break;
            case 11:
                if (td[startPoint].style.background === '' && td[startPoint - 19].style.background === '' && td[startPoint - 20].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint - 19].style.background = color;
                    td[startPoint - 20].style.background = color;
                    td[startPoint - 11].style.background = '';
                    td[startPoint - 9].style.background = '';
                    td[startPoint - 21].style.background = '';
                    block++
                }
                break;
            case 12:
                if ((startPoint) % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 9].style.background === '' && td[startPoint + 1].style.background === '') {
                    td[startPoint - 11].style.background = color
                    td[startPoint - 9].style.background = color
                    td[startPoint + 1].style.background = color
                    td[startPoint].style.background = '';
                    td[startPoint - 19].style.background = '';
                    td[startPoint - 20].style.background = '';
                    block++
                }
                break;
            case 13:
                if (td[startPoint - 1].style.background === '' && td[startPoint].style.background === '' && td[startPoint - 20].style.background === '') {
                    td[startPoint - 1].style.background = color
                    td[startPoint].style.background = color
                    td[startPoint - 20].style.background = color
                    td[startPoint - 11].style.background = '';
                    td[startPoint - 9].style.background = '';
                    td[startPoint + 1].style.background = '';
                    block++
                }
                break;
            case 14:
                if ((startPoint + 1) % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 9].style.background === '' && td[startPoint - 21].style.background === '') {
                    td[startPoint - 11].style.background = color
                    td[startPoint - 9].style.background = color
                    td[startPoint - 21].style.background = color
                    td[startPoint].style.background = '';
                    td[startPoint - 20].style.background = '';
                    td[startPoint - 1].style.background = '';
                    block = block - 3;
                }
                break;
            case 21:
                if (td[startPoint].style.background === '' && td[startPoint + 1].style.background === '' && td[startPoint - 20].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 20].style.background = color;
                    td[startPoint - 11].style.background = '';
                    td[startPoint - 9].style.background = '';
                    td[startPoint - 19].style.background = '';
                    block++
                }
                break;
            case 22:
                if ((startPoint) % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 9].style.background === '' && td[startPoint - 1].style.background === '') {
                    td[startPoint - 11].style.background = color
                    td[startPoint - 9].style.background = color
                    td[startPoint - 1].style.background = color
                    td[startPoint].style.background = '';
                    td[startPoint + 1].style.background = '';
                    td[startPoint - 20].style.background = '';
                    block++
                }
                break;
            case 23:
                if (td[startPoint].style.background === '' && td[startPoint - 20].style.background === '' && td[startPoint - 21].style.background === '') {
                    td[startPoint].style.background = color
                    td[startPoint - 21].style.background = color
                    td[startPoint - 20].style.background = color
                    td[startPoint - 11].style.background = '';
                    td[startPoint - 9].style.background = '';
                    td[startPoint - 1].style.background = '';
                    block++
                }
                break;
            case 24:
                if (
                    (startPoint + 1) % 10 !== 0 &&
                    td[startPoint - 11].style.background === '' &&
                    td[startPoint - 9].style.background === '' &&
                    td[startPoint - 19].style.background === ''
                ) {
                    td[startPoint - 11].style.background = color
                    td[startPoint - 9].style.background = color
                    td[startPoint - 19].style.background = color
                    td[startPoint].style.background = '';
                    td[startPoint - 20].style.background = '';
                    td[startPoint - 21].style.background = '';
                    block = block - 3;
                }
                break;
            case 31:
                if (td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint - 11].style.background = ''
                    block++
                }
                break;
            case 32:
                if (td[startPoint - 11].style.background === '' && startPoint % 10 !== 0) {
                    td[startPoint - 20].style.background = '';
                    td[startPoint - 11].style.background = color
                    block++
                }
                break;
            case 33:
                if (td[startPoint - 20].style.background === '') {
                    td[startPoint - 9].style.background = '';
                    td[startPoint - 20].style.background = color
                    block++
                }
                break;
            case 34:
                if (td[startPoint - 9].style.background === '' && (startPoint + 1) % 10 !== 0) {
                    td[startPoint].style.background = '';
                    td[startPoint - 9].style.background = color
                    block = block - 3;
                }
                break;
            case 41:
                if (td[startPoint].style.background === '' && td[startPoint + 10].style.background === '' && td[startPoint - 20].style.background === '' && td[startPoint - 30].style.background === '') {
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 8].style.background = ''
                    td[startPoint - 30].style.background = color
                    td[startPoint - 10].style.background = color
                    td[startPoint - 20].style.background = color
                    td[startPoint].style.background = color
                    block++;
                }
                break;
            case 42:
                if (
                    (startPoint) % 10 !== 0 &&
                    (startPoint + 1) % 10 !== 0 &&
                    (startPoint + 2) % 10 !== 0 &&
                    (
                        td[startPoint].style.background === '' ||
                        td[startPoint].style.background === color
                    ) &&
                    td[startPoint - 11].style.background === '' &&
                    td[startPoint - 9].style.background === '' &&
                    td[startPoint - 8].style.background === ''
                ) {
                    td[startPoint].style.background = ''
                    td[startPoint - 20].style.background = ''
                    td[startPoint - 30].style.background = ''
                    block--;
                    td[startPoint - 11].style.background = color
                    td[startPoint - 9].style.background = color
                    td[startPoint - 8].style.background = color
                }
                break;
            case 51:
                if (td[startPoint].style.background === '' && td[startPoint - 19].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint - 19].style.background = color;
                    td[startPoint - 20].style.background = ''
                    td[startPoint - 21].style.background = ''
                    block++;
                }
                break;
            case 52:
                if (startPoint % 10 !== 0 && td[startPoint - 20].style.background === '' && td[startPoint - 21].style.background === '') {
                    td[startPoint - 20].style.background = color;
                    td[startPoint - 21].style.background = color;
                    td[startPoint].style.background = ''
                    td[startPoint - 19].style.background = ''
                    block--;

                }
                break;
            case 61:
                if (td[startPoint - 9].style.background === '' && td[startPoint + 1].style.background === '') {
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 9].style.background = color;
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 19].style.background = ''
                    block++;
                }
                break;
            case 62:
                if (startPoint % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 19].style.background === '') {
                    td[startPoint - 11].style.background = color;
                    td[startPoint - 19].style.background = color;
                    td[startPoint + 1].style.background = ''
                    td[startPoint - 9].style.background = ''
                    block--;
                }
                break;
            default:
                alert('Block # error')
        }
    }
}

function goLeft() {
    switch (block) {
        case 1:
            if (startPoint % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                startPoint--;
                td[startPoint - 18].style.background = ''
                td[startPoint - 8].style.background = ''
                td[startPoint - 10].style.background = color;
                td[startPoint - 20].style.background = color;
            }
            break;
        case 11:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '' && td[startPoint - 22].style.background === '') {
                td[startPoint - 9].style.background = ''
                td[startPoint - 21].style.background = ''
                td[startPoint - 12].style.background = color;
                td[startPoint - 22].style.background = color;
                startPoint--;
            }
            break;
        case 12:
            if ((startPoint) % 10 !== 0 && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '' && td[startPoint - 1].style.background === '') {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 19].style.background = ''
                startPoint--;
                td[startPoint].style.background = color;
                td[startPoint - 10].style.background = color;
                td[startPoint - 20].style.background = color;
            }
            break;
        case 13:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '' && td[startPoint].style.background === '') {
                td[startPoint].style.background = color
                td[startPoint - 12].style.background = color
                td[startPoint - 9].style.background = ''
                td[startPoint + 1].style.background = ''
                startPoint--;
            }
            break;
        case 14:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 2].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 2].style.background = color
                td[startPoint - 11].style.background = color
                td[startPoint - 21].style.background = color
                startPoint--;
            }
            break;
        case 21:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '') {
                td[startPoint - 9].style.background = ''
                td[startPoint - 19].style.background = ''
                startPoint--;
                td[startPoint - 11].style.background = color;
                td[startPoint - 19].style.background = color;
            }
            break;
        case 22:
            if ((startPoint) % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint + 1].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 20].style.background = '';
                td[startPoint - 1].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 21].style.background = color;
                startPoint--;
            }
            break;
        case 23:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 2].style.background === '' && td[startPoint - 12].style.background === '') {
                td[startPoint - 1].style.background = ''
                td[startPoint - 9].style.background = ''
                td[startPoint - 2].style.background = color;
                td[startPoint - 12].style.background = color;
                startPoint--;
            }
            break;
        case 24:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 22].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint - 11].style.background === '') {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 1].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 22].style.background = color;
                startPoint--;
            }
            break;
        case 31:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint - 9].style.background = ''
                td[startPoint - 20].style.background = ''
                startPoint--;
                td[startPoint - 11].style.background = color;
                td[startPoint - 20].style.background = color;
            }
            break;
        case 32:
            if ((startPoint) % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint - 21].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 1].style.background = color;
                td[startPoint].style.background = '';
                td[startPoint - 9].style.background = '';
                td[startPoint - 20].style.background = '';
                startPoint--;
            }
            break;
        case 33:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 12].style.background === '') {
                td[startPoint - 12].style.background = color;
                td[startPoint - 1].style.background = color;
                td[startPoint].style.background = '';
                td[startPoint - 9].style.background = '';
                startPoint--;
            }
            break;
        case 34:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 12].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint - 12].style.background = color;
                td[startPoint - 1].style.background = color;
                td[startPoint - 21].style.background = color;
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                startPoint--;
            }
            break;
        case 41:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '') {
                startPoint--;
                td[startPoint - 7].style.background = ''
                td[startPoint - 11].style.background = color;
            }
            break;
        case 42:
            if (startPoint % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '' && td[startPoint - 31].style.background === '') {
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 30].style.background = '';
                startPoint--;
                td[startPoint - 10].style.background = color;
                td[startPoint - 20].style.background = color;
                td[startPoint - 30].style.background = color;
                td[startPoint].style.background = color;
            }
            break;
        case 51:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '') {
                td[startPoint - 9].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 22].style.background = color;
                td[startPoint - 11].style.background = color;
                startPoint--;
            }
            break;
        case 52:
            if ((startPoint) % 10 !== 0 && td[startPoint - 1].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 20].style.background === '') {
                td[startPoint].style.background = ''
                td[startPoint - 9].style.background = ''
                td[startPoint - 19].style.background = ''
                td[startPoint - 20].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 1].style.background = color;
                startPoint--;
            }
            break;
        case 61:
            if ((startPoint - 1) % 10 !== 0 && td[startPoint - 12].style.background === '') {
                td[startPoint - 10].style.background = ''
                td[startPoint - 19].style.background = ''
                td[startPoint - 12].style.background = color;
                td[startPoint - 21].style.background = color;
                startPoint--;
            }
            break;
        case 62:
            if ((startPoint) % 10 !== 0 && td[startPoint].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint + 1].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 9].style.background = ''
                td[startPoint].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 21].style.background = color;
                startPoint--;
            }
            break;
        default:
            alert('Block # error')
    }
}

function goRight() {
    switch (block) {
        case 1:
            if ((startPoint - 8) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint - 18].style.background === '') {
                startPoint++;
                td[startPoint - 21].style.background = '';
                td[startPoint - 11].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 19].style.background = color;
            }
            break;
        case 11:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint - 20].style.background === '') {
                td[startPoint - 11].style.background = '';
                td[startPoint - 21].style.background = '';
                startPoint++;
                td[startPoint - 11].style.background = color;
                td[startPoint - 21].style.background = color;
                td[startPoint - 9].style.background = color;
            }
            break;
        case 12:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint - 9].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 18].style.background = color;
                td[startPoint + 1].style.background = color;
                startPoint++;
            }
            break;
        case 13:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 2].style.background === '' && td[startPoint - 8].style.background === '') {
                td[startPoint + 2].style.background = color;
                td[startPoint - 8].style.background = color;
                td[startPoint + 1].style.background = '';
                td[startPoint - 11].style.background = '';
                startPoint++;
            }
            break;
        case 14:
            if ((startPoint + 1) % 10 !== 0 && td[startPoint + 2].style.background === '' && td[startPoint - 11].style.background === '' && td[startPoint - 21].style.background === '') {
                td[startPoint + 1].style.background = color;
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 1].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 19].style.background = color;
                startPoint++;
            }
            break;
        case 21:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint - 11].style.background = '';
                td[startPoint - 19].style.background = '';
                startPoint++;
                td[startPoint - 11].style.background = color;
                td[startPoint - 19].style.background = color;
                td[startPoint - 9].style.background = color;
            }
            break;
        case 22:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 2].style.background === '' && td[startPoint - 19].style.background === '' && td[startPoint - 9].style.background === '') {
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint + 2].style.background = color;
                td[startPoint - 19].style.background = color;
                td[startPoint - 9].style.background = color;
                startPoint++;
            }
            break;
        case 23:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint - 1].style.background = '';
                td[startPoint - 11].style.background = '';
                td[startPoint].style.background = color
                td[startPoint - 8].style.background = color
                startPoint++;
            }
            break;
        case 24:
            if ((startPoint + 1) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint - 19].style.background === '' && td[startPoint - 9].style.background === '') {
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 21].style.background = '';
                td[startPoint + 1].style.background = color
                td[startPoint - 9].style.background = color
                td[startPoint - 19].style.background = color
                startPoint++;
            }
            break;
        case 31:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint - 19].style.background === '') {
                td[startPoint - 11].style.background = '';
                td[startPoint - 20].style.background = '';
                startPoint++;
                td[startPoint - 11].style.background = color;
                td[startPoint - 20].style.background = color;
                td[startPoint - 9].style.background = color;
            }
            break;
        case 32:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint - 8].style.background === '' && td[startPoint - 19].style.background === '') {
                td[startPoint - 19].style.background = color
                td[startPoint - 8].style.background = color
                td[startPoint + 1].style.background = color
                td[startPoint].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 10].style.background = '';
                startPoint++;
            }
            break;
        case 33:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint + 1].style.background === '') {
                td[startPoint - 11].style.background = '';
                td[startPoint].style.background = '';
                td[startPoint + 1].style.background = color;
                td[startPoint - 8].style.background = color;
                startPoint++;
            }
            break;
        case 34:
            if ((startPoint + 1) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint - 9].style.background === '' && td[startPoint - 19].style.background === '') {
                td[startPoint - 19].style.background = color
                td[startPoint - 9].style.background = color
                td[startPoint + 1].style.background = color
                td[startPoint].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 11].style.background = '';
                startPoint++;
            }
            break;
        case 41:
            if ((startPoint - 7) % 10 !== 0 && td[startPoint - 7].style.background === '') {
                startPoint++;
                td[startPoint - 12].style.background = '';
                td[startPoint - 8].style.background = color;
            }
            break;
        case 42:
            if ((startPoint + 1) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint + 11].style.background === '' && td[startPoint + 21].style.background === '' && td[startPoint + 31].style.background === '') {
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 30].style.background = '';
                startPoint++;
                td[startPoint - 10].style.background = color;
                td[startPoint - 20].style.background = color;
                td[startPoint - 30].style.background = color;
                td[startPoint].style.background = color;
            }
            break;
        case 51:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 8].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint - 10].style.background = '';
                td[startPoint - 21].style.background = '';
                td[startPoint - 8].style.background = color;
                td[startPoint - 19].style.background = color;
                startPoint++;
            }
            break;
        case 52:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 1].style.background === '' && td[startPoint - 8].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 19].style.background = ''
                td[startPoint + 1].style.background = color;
                td[startPoint - 8].style.background = color;
                td[startPoint - 18].style.background = color;
                startPoint++;
            }
            break;
        case 61:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint - 9].style.background === '' && td[startPoint - 18].style.background === '') {
                td[startPoint - 11].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 18].style.background = color;
                startPoint++;
            }
            break;
        case 62:
            if ((startPoint + 2) % 10 !== 0 && td[startPoint + 2].style.background === '' && td[startPoint - 8].style.background === '' && td[startPoint - 19].style.background === '') {
                td[startPoint + 1].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 8].style.background = color;
                td[startPoint - 19].style.background = color;
                td[startPoint + 2].style.background = color;
                startPoint++;
            }
            break;
        default:
            alert('Block # error')
    }
}

function fall() {
    switch (block) {
        case 1:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 10].style.background = color;
                    td[startPoint - 9].style.background = color;
                    td[startPoint - 20].style.background = ''
                    td[startPoint - 19].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }

            break;
        case 11:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 11].style.background = color
                    td[startPoint - 21].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 12:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint - 9].style.background === '' && td[startPoint + 10].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint - 9].style.background = color;
                    td[startPoint - 20].style.background = ''
                    td[startPoint - 19].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 13:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint - 1].style.background === '' && td[startPoint].style.background === '' && td[startPoint + 11].style.background === '') {
                    td[startPoint - 1].style.background = color
                    td[startPoint].style.background = color
                    td[startPoint + 11].style.background = color
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 11].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 14:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 10].style.background === '' && td[startPoint + 9].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint - 20].style.background = '';
                    td[startPoint + 9].style.background = color;
                    td[startPoint - 1].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 21:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 9].style.background = color
                    td[startPoint - 19].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 22:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 10].style.background === '' && td[startPoint + 11].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint + 11].style.background = color;
                    td[startPoint + 1].style.background = ''
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 23:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 9].style.background === '' && td[startPoint].style.background === '' && td[startPoint + 1].style.background === '') {
                    td[startPoint + 9].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint].style.background = color;
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 9].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 24:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 10].style.background === '' && td[startPoint - 11].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint + -11].style.background = color;
                    td[startPoint - 21].style.background = ''
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 31:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 10].style.background = color
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 32:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint + 10].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 33:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint + 10].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 10].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 34:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint - 1].style.background === '' && td[startPoint + 10].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 41:
            //41
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' && (td[startPoint].style.background === '' || td[startPoint].style.background === color) && td[startPoint - 1].style.background === '' && td[startPoint + 2].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint + 2].style.background = color;
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 8].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 42:
            if (startPoint <= (rows * cols) - 11) {
                if (td[startPoint + 10].style.background === '' || td[startPoint + 10].style.background === color) {
                    td[startPoint + 10].style.background = color;
                    td[startPoint].style.background = color;
                    td[startPoint - 10].style.background = color;
                    td[startPoint - 20].style.background = color;
                    if (startPoint > 29) {
                        td[startPoint - 30].style.background = ''
                    }
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 51:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint - 11].style.background === '' && td[startPoint + 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 11].style.background = color;
                    td[startPoint - 9].style.background = ''
                    td[startPoint - 21].style.background = ''
                    td[startPoint - 10].style.background = color
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 52:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 1].style.background === '' && td[startPoint + 10].style.background === '') {
                    td[startPoint + 10].style.background = color;
                    td[startPoint + 1].style.background = color;
                    td[startPoint - 10].style.background = ''
                    td[startPoint - 19].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 61:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint - 9].style.background === '' && td[startPoint - 1].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint - 1].style.background = color;
                    td[startPoint - 9].style.background = color;
                    td[startPoint - 10].style.background = color
                    td[startPoint - 19].style.background = ''
                    td[startPoint - 11].style.background = ''
                    td[startPoint - 20].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        case 62:
            if (startPoint <= ((rows * cols) - 11)) {
                if (td[startPoint + 11].style.background === '' && td[startPoint].style.background === '') {
                    td[startPoint].style.background = color;
                    td[startPoint + 11].style.background = color;
                    td[startPoint - 20].style.background = ''
                    td[startPoint - 9].style.background = ''
                    startPoint = startPoint + 10;
                } else {
                    breaker = true;
                }
            } else {
                breaker = true;
            }
            break;
        default:
            alert('Block # error')
    }
}