function rotateI() {
    switch (block) {
        case 41:
            if (td[startPoint].style.background === '' &&
                td[startPoint + 10].style.background === '' &&
                td[startPoint - 20].style.background === '' &&
                td[startPoint - 30].style.background === ''
            ) {
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
    }
}

function goLeftI() {
    switch (block) {
        case 41:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 12].style.background === ''
            ) {
                startPoint--;
                td[startPoint - 7].style.background = ''
                td[startPoint - 11].style.background = color;
            }
            break;
        case 42:
            if (startPoint % 10 !== 0 &&
                td[startPoint - 1].style.background === '' &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 21].style.background === '' &&
                td[startPoint - 31].style.background === ''
            ) {
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
    }
}

function goRightI() {
    switch (block) {
        case 41:
            if ((startPoint - 7) % 10 !== 0 &&
                td[startPoint - 7].style.background === ''
            ) {
                startPoint++;
                td[startPoint - 12].style.background = '';
                td[startPoint - 8].style.background = color;
            }
            break;
        case 42:
            if ((startPoint + 1) % 10 !== 0 &&
                td[startPoint + 1].style.background === '' &&
                td[startPoint + 11].style.background === '' &&
                td[startPoint + 21].style.background === '' &&
                td[startPoint + 31].style.background === ''
            ) {
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
    }
}

function fallI() {
    switch (block) {
        case 41:
            //41
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' &&
                    (td[startPoint].style.background === '' ||
                        td[startPoint].style.background === color) &&
                    td[startPoint - 1].style.background === '' &&
                    td[startPoint + 2].style.background === ''
                ) {
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
                if (td[startPoint + 10].style.background === '' ||
                    td[startPoint + 10].style.background === color
                ) {
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
    }
}

function previevI() {
    switch (previevBlock) {
        case 41:
            wTd[previevPoint].style.background = previevColor;
            wTd[previevPoint + 1].style.background = previevColor;
            wTd[previevPoint - 1].style.background = previevColor;
            wTd[previevPoint + 2].style.background = previevColor;
            break;
    }
}