function rotateZ() {
    switch (block) {
        case 51:
            if (td[startPoint].style.background === '' &&
                td[startPoint - 19].style.background === ''
            ) {
                td[startPoint].style.background = color;
                td[startPoint - 19].style.background = color;
                td[startPoint - 20].style.background = ''
                td[startPoint - 21].style.background = ''
                block++;
            }
            break;
        case 52:
            if (startPoint % 10 !== 0 &&
                td[startPoint - 20].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint - 20].style.background = color;
                td[startPoint - 21].style.background = color;
                td[startPoint].style.background = ''
                td[startPoint - 19].style.background = ''
                block--;

            }
            break;
    }
}

function goLeftZ() {
    switch (block) {
        case 51:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 12].style.background === ''
            ) {
                td[startPoint - 9].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 22].style.background = color;
                td[startPoint - 11].style.background = color;
                startPoint--;
            }
            break;
        case 52:
            if ((startPoint) % 10 !== 0 &&
                td[startPoint - 1].style.background === '' &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 20].style.background === ''
            ) {
                td[startPoint].style.background = ''
                td[startPoint - 9].style.background = ''
                td[startPoint - 19].style.background = ''
                td[startPoint - 20].style.background = color;
                td[startPoint - 11].style.background = color;
                td[startPoint - 1].style.background = color;
                startPoint--;
            }
            break;
    }
}

function goRightZ() {
    switch (block) {
        case 51:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 18].style.background === ''
            ) {
                td[startPoint - 10].style.background = '';
                td[startPoint - 21].style.background = '';
                td[startPoint - 8].style.background = color;
                td[startPoint - 19].style.background = color;
                startPoint++;
            }
            break;
        case 52:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint + 1].style.background === '' &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 18].style.background === ''
            ) {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 19].style.background = ''
                td[startPoint + 1].style.background = color;
                td[startPoint - 8].style.background = color;
                td[startPoint - 18].style.background = color;
                startPoint++;
            }
            break;
    }
}

function fallZ() {
    switch (block) {
        case 51:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint - 11].style.background === '' &&
                    td[startPoint + 1].style.background === '' &&
                    td[startPoint].style.background === ''
                ) {
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
                if (td[startPoint + 1].style.background === '' &&
                    td[startPoint + 10].style.background === ''
                ) {
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
    }
}
function previevZ() {
    switch (previevBlock) {
        case 51:
            wTd[previevPoint+1].style.background = previevColor;
            wTd[previevPoint - 6].style.background = previevColor;
            wTd[previevPoint + 2].style.background = previevColor;
            wTd[previevPoint - 5].style.background = previevColor;
            break;
    }
}