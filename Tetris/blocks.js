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