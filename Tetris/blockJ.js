function rotateJ() {
    switch (block) {
        case 11:
            if (td[startPoint].style.background === '' &&
                td[startPoint - 19].style.background === '' &&
                td[startPoint - 20].style.background === ''
            ) {
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
            if ((startPoint) % 10 !== 0 &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 9].style.background === '' &&
                td[startPoint + 1].style.background === ''
            ) {
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
            if (td[startPoint - 1].style.background === '' &&
                td[startPoint].style.background === '' &&
                td[startPoint - 20].style.background === ''
            ) {
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
            if ((startPoint + 1) % 10 !== 0 &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 9].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint - 11].style.background = color
                td[startPoint - 9].style.background = color
                td[startPoint - 21].style.background = color
                td[startPoint].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 1].style.background = '';
                block = block - 3;
            }
            break;
    }
}
function goLeftJ() {
    switch (block) {
     case 11:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 12].style.background === '' &&
                td[startPoint - 22].style.background === ''
            ) {
                td[startPoint - 9].style.background = ''
                td[startPoint - 21].style.background = ''
                td[startPoint - 12].style.background = color;
                td[startPoint - 22].style.background = color;
                startPoint--;
            }
            break;
        case 12:
            if ((startPoint) % 10 !== 0 &&
                td[startPoint - 11].style.background === '' &&
                d[startPoint - 21].style.background === '' &&
                td[startPoint - 1].style.background === ''
            ) {
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
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 12].style.background === '' &&
                td[startPoint].style.background === ''
            ) {
                td[startPoint].style.background = color
                td[startPoint - 12].style.background = color
                td[startPoint - 9].style.background = ''
                td[startPoint + 1].style.background = ''
                startPoint--;
            }
            break;
        case 14:
            if ((startPoint - 1) % 10 !== 0 &&
                td[startPoint - 2].style.background === '' &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint].style.background = ''
                td[startPoint - 10].style.background = ''
                td[startPoint - 20].style.background = ''
                td[startPoint - 2].style.background = color
                td[startPoint - 11].style.background = color
                td[startPoint - 21].style.background = color
                startPoint--;
            }
            break;   
    }
}
function goRightJ() {
    switch (block) {
      case 11:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint - 8].style.background === '' &&
                td[startPoint - 20].style.background === ''
            ) {
                td[startPoint - 11].style.background = '';
                td[startPoint - 21].style.background = '';
                startPoint++;
                td[startPoint - 11].style.background = color;
                td[startPoint - 21].style.background = color;
                td[startPoint - 9].style.background = color;
            }
            break;
        case 12:
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint + 1].style.background === '' &&
                td[startPoint - 9].style.background === '' &&
                td[startPoint - 18].style.background === ''
            ) {
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
            if ((startPoint + 2) % 10 !== 0 &&
                td[startPoint + 2].style.background === '' &&
                td[startPoint - 8].style.background === ''
            ) {
                td[startPoint + 2].style.background = color;
                td[startPoint - 8].style.background = color;
                td[startPoint + 1].style.background = '';
                td[startPoint - 11].style.background = '';
                startPoint++;
            }
            break;
        case 14:
            if ((startPoint + 1) % 10 !== 0 &&
                td[startPoint + 2].style.background === '' &&
                td[startPoint - 11].style.background === '' &&
                td[startPoint - 21].style.background === ''
            ) {
                td[startPoint + 1].style.background = color;
                td[startPoint - 10].style.background = '';
                td[startPoint - 20].style.background = '';
                td[startPoint - 1].style.background = '';
                td[startPoint - 9].style.background = color;
                td[startPoint - 19].style.background = color;
                startPoint++;
            }
            break;  
    }
}
function fallJ() {
    switch (block) {
      case 11:
                if (startPoint <= ((rows * cols) - 1)) {
                    if (td[startPoint + 1].style.background === '' &&
                        td[startPoint - 1].style.background === '' &&
                        td[startPoint].style.background === ''
                    ) {
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
                    if (td[startPoint - 9].style.background === '' &&
                        td[startPoint + 10].style.background === ''
                    ) {
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
                    if (td[startPoint - 1].style.background === '' &&
                        td[startPoint].style.background === '' &&
                        td[startPoint + 11].style.background === ''
                    ) {
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
                    if (td[startPoint + 10].style.background === '' &&
                        td[startPoint + 9].style.background === ''
                    ) {
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
    }
}