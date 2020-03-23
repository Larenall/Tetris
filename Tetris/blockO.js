function goLeftO() {
    switch (block) {
        case 1:
            if (startPoint % 10 !== 0 &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                startPoint--;
                td[startPoint - 18].style.background = ''
                td[startPoint - 8].style.background = ''
                td[startPoint - 10].style.background = color;
                td[startPoint - 20].style.background = color;
            }
            break;
    }
}

function goRightO() {
    switch (block) {
        case 1:
            if ((startPoint - 8) % 10 !== 0 &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 18].style.background === ''
            ) {
                startPoint++;
                td[startPoint - 21].style.background = '';
                td[startPoint - 11].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 19].style.background = color;
            }
            break;
    }
}

function fallO() {
    switch (block) {
        case 1:
            if (startPoint <= ((rows * cols) - 1)) {
                if (td[startPoint + 1].style.background === '' &&
                    td[startPoint].style.background === ''
                ) {
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
    }
}