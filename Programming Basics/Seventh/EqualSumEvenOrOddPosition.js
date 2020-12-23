function equalEvenOrOdd(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());


    let printLine = '';
    for (let i = firstNum; i <= secondNum; i++) {
        let sumEven = 0;
        let sumOdd = 0;
        let currentNum = '' + i;
        for (let j = 0; j < currentNum.length; j++) {
            let string = currentNum[j];
            let currentDigit = Number(string);
            if (j % 2 == 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven == sumOdd) {
            printLine += i + ' ';

        }
    }
    console.log(printLine);
}
equalEvenOrOdd([ '100000', '100050' ]);