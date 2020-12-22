function words1To100([arg]) {
    let num = parseInt(arg);

    if (num >= 0 && num <= 20) {
        switch (num) {
            case 0: num = 'zero'; break;
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            case 10: num = 'ten'; break;
            case 11: num = 'eleven'; break;
            case 12: num = 'twelve'; break;
            case 13: num = 'thirteen'; break;
            case 14: num = 'fourteen'; break;
            case 15: num = 'fifteen'; break;
            case 16: num = 'sixteen'; break;
            case 17: num = 'seventeen'; break;
            case 18: num = 'eighteen'; break;
            case 19: num = 'nineteen'; break;
            case 20: num = 'twenty'; break;
            default:
            break;
        }
        console.log(num);
    }

    if (num >= 21 && num <= 29) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('twenty ' + num);

    }
    if (num == 30) {
        console.log('thirty');
    }

    if (num >= 31 && num <= 39) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('thirty ' + num);

    }
    if (num == 40) {
        console.log('forty');
    }

    if (num >= 41 && num <= 49) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('forty ' + num);

    }
    if (num == 50) {
        console.log('fifty');
    }

    if (num >= 51 && num <= 59) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('fifty ' + num);

    }
    if (num == 60) {
        console.log('sixty');
    }

    if (num >= 61 && num <= 69) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('sixty ' + num);

    }
    if (num == 70) {
        console.log('seventy');
    }

    if (num >= 71 && num <= 79) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('seventy ' + num);

    }
    if (num == 80) {
        console.log('eighty');
    }

    if (num >= 81 && num <= 89) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('eighty ' + num);

    }
    if (num == 90) {
        console.log('ninety');
    }

    if (num >= 91 && num <= 99) {
        num = num % 10;
        switch (num) {
            case 1: num = 'one'; break;
            case 2: num = 'two'; break;
            case 3: num = 'three'; break;
            case 4: num = 'four'; break;
            case 5: num = 'five'; break;
            case 6: num = 'six'; break;
            case 7: num = 'seven'; break;
            case 8: num = 'eight'; break;
            case 9: num = 'nine'; break;
            default:
            break;
        }
        console.log('ninety ' + num);

    }
    if (num == 100) {
        console.log('one hundred');
    }
}
words1To100(['90']);