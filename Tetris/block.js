function rotate() {
    if (startPoint > 39) {
        switch (block) {
            case 1:
                break;
            case 11:
            case 12:
            case 13:
            case 14:
                rotateJ()
                break;
            case 21:
            case 22:
            case 23:
            case 24:
                rotateL()
                break;
            case 31:
            case 32:
            case 33:
            case 34:
                rotateT()
                break;
            case 41:
            case 42:
                rotateI()
                break;
            case 51:
            case 52:
                rotateZ()
                break;
            case 61:
            case 62:
                rotateS()
                break;
        }
    }
}

function goLeft() {
    switch (block) {
        case 1:
            goLeftO()
            break;
        case 11:
        case 12:
        case 13:
        case 14:
            goLeftJ()
            break;
        case 21:
        case 22:
        case 23:
        case 24:
            goLeftL()
            break;
        case 31:
        case 32:
        case 33:
        case 34:
            goLeftT()
            break;
        case 41:
        case 42:
            goLeftI()
            break;
        case 51:
        case 52:
            goLeftZ()
            break;
        case 61:
        case 62:
            goLeftS()
            break;
    }
}

function goRight() {
    switch (block) {
        case 1:
            goRightO()
            break;
        case 11:
        case 12:
        case 13:
        case 14:
            goRightJ()
            break;
        case 21:
        case 22:
        case 23:
        case 24:
            goRightL()
            break;
        case 31:
        case 32:
        case 33:
        case 34:
            goRightT()
            break;
        case 41:
        case 42:
            goRightI()
            break;
        case 51:
        case 52:
            goRightZ()
            break;
        case 61:
        case 62:
            goRightS()
            break;
    }
}

function fall() {
    switch (block) {
        case 1:
            fallO();
            break;
        case 11:
        case 12:
        case 13:
        case 14:
            fallJ();
            break;
        case 21:
        case 22:
        case 23:
        case 24:
            fallL();
            break;
        case 31:
        case 32:
        case 33:
        case 34:
            fallT();
            break;
        case 41:
        case 42:
            fallI();
            break;
        case 51:
        case 52:
            fallZ();
            break;
        case 61:
        case 62:
            fallS();
            break;
    }
}