function rotate() {
    console.log(block)
    if (startPoint > 39) {
        switch (block) {
            case 1:
                break;
            case 11 || 12 || 13 || 14:
                rotateJ()
                break;
            case 21 || 22 || 23 || 24:
                rotateL()
                break;
            case 31 || 32 || 33 || 34:
                rotateT()
                break;
            case 41 || 42:
                rotateI()
                break;
            case 51 || 52:
                rotateZ()
                break;
            case 61 || 62:
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
        case 11 || 12 || 13 || 14:
            goLeftJ()
            break;
        case 21 || 22 || 23 || 24:
            goLeftL()
            break;
        case 31 || 32 || 33 || 34:
            goLeftT()
            break;
        case 41 || 42:
            goLeftI()
            break;
        case 51 || 52:
            goLeftZ()
            break;
        case 61 || 62:
            goLeftS()
            break;
    }
}

function goRight() {
    switch (block) {
        case 1:
            goRightO()
            break;
        case 11 || 12 || 13 || 14:
            goRightJ()
            break;
        case 21 || 22 || 23 || 24:
            goRightL()
            break;
        case 31 || 32 || 33 || 34:
            goRightT()
            break;
        case 41 || 42:
            goRightI()
            break;
        case 51 || 52:
            goRightZ()
            break;
        case 61 || 62:
            goRightS()
            break;
    }
}

function fall() {
    switch (block) {
        case 1:
            fallO();
            break;
        case 11 || 12 || 13 || 14:
            fallJ();
            break;
        case 21 || 22 || 23 || 24:
            fallL();
            break;
        case 31 || 32 || 33 || 34:
            fallT();
            break;
        case 41 || 42:
            fallI();
            break;
        case 51 || 52:
            fallZ();
            break;
        case 61 || 62:
            fallS();
            break;
    }
}