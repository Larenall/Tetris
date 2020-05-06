function rotateT() {
    switch (block) {
        case 31:
            if (td[startPoint].style.background === '') {
                td[startPoint].style.background = color;
                td[startPoint - 11].style.background = ''
                block++
            }
            break;
        case 32:
            if (td[startPoint - 11].style.background === '' &&
                startPoint % 10 !== 0
            ) {
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
            if (td[startPoint - 9].style.background === '' &&
                (startPoint + 1) % 10 !== 0
            ) {
                td[startPoint].style.background = '';
                td[startPoint - 9].style.background = color
                block = block - 3;
            }
            break;
    }
}

function goLeftT() {
    switch (block) {
        case 31:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 12].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint - 9].style.background = ''
                td[startPoint - 20].style.background = ''
                startPoint--;
                td[startPoint - 11].style.background = color;
                td[startPoint - 20].style.background = color;
            }
            break;
        case 32:
            if ((startPoint) % 10 !== 0 &&
                td[startPoint - 1].style.background === '' &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
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
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 1].style.background === '' &&
                td[startPoint - 12].style.background === ''
            ) {
                td[startPoint - 12].style.background = color;
                td[startPoint - 1].style.background = color;
                td[startPoint].style.background = '';
                td[startPoint - 9].style.background = '';
                startPoint--;
            }
            break;
        case 34:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 1].style.background === '' &&
                td[startPoint - 12].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint - 12].style.background = color;
                td[startPoint - 1].style.background = color;
                td[startPoint - 21].style.background = color;
                td[startPoint].style.background = '';
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                startPoint--;
            }
            break;
    }
}

function goRightT() {
    switch (block) {
        case 31:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 19].style.background === ''
            ) {
                td[startPoint - 11].style.background = '';
                td[startPoint - 20].style.background = '';
                startPoint++;
                td[startPoint - 11].style.background = color;
                td[startPoint - 20].style.background = color;
                td[startPoint - 9].style.background = color;
            }
            break;
        case 32:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint + 1].style.background === '' &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 19].style.background === ''
            ) {
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
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint + 1].style.background === ''
            ) {
                td[startPoint - 11].style.background = '';
                td[startPoint].style.background = '';
                td[startPoint + 1].style.background = color;
                td[startPoint - 8].style.background = color;
                startPoint++;
            }
            break;
        case 34:
            if ((startPoint + 1) % 10 !== 0 &&
                td[startPoint + 1].style.background === '' &&
                td[startPoint - 9].style.background === '' &&
                td[startPoint - 19].style.background === ''
            ) {
                td[startPoint - 19].style.background = color
                td[startPoint - 9].style.background = color
                td[startPoint + 1].style.background = color
                td[startPoint].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 11].style.background = '';
                startPoint++;
            }
            break;
    }
}

function fallT() {
    switch (block) {
        case 31:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' &&
                    td[startPoint - 1].style.background === '' &&
                    td[startPoint].style.background === ''
                ) {
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
                if (td[startPoint + 1].style.background === '' &&
                    td[startPoint + 10].style.background === ''
                ) {
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
                if (td[startPoint + 1].style.background === '' &&
                    td[startPoint - 1].style.background === '' &&
                    td[startPoint + 10].style.background === ''
                ) {
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
                if (td[startPoint - 1].style.background === '' &&
                    td[startPoint + 10].style.background === ''
                ) {
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
    }
}

function previevT() {
    switch (previevBlock) {
        case 31:
            wTd[previevPoint].style.background = previevColor;
            wTd[previevPoint - 1].style.background = previevColor;
            wTd[previevPoint + 1].style.background = previevColor;
            wTd[previevPoint - 6].style.background = previevColor;
            break;
    }
}