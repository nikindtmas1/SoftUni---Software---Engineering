function lotaryStatistics(num) {
    let n = Number(num);

    let countarOddSingleDigit = 0;
    let countarEven = 0;
    let countarEndOfSeven = 0;
    let countarHundred = 0;

    for (let i = 1; i <= n; i++) {
        if (i < 10 && i % 2 != 0) {
            countarOddSingleDigit++;
        } else if (i % 2 == 0) {
            countarEven++;
        }
        if (i == 7 || i % 10 == 7) {
            countarEndOfSeven++;
        }
        if (100 % i == 0) {
            countarHundred++;
        }
    }

    let procentOddSingle = (countarOddSingleDigit / n) * 100;
    let procentEven = (countarEven / n) * 100;
    let procentEndOfSeven = (countarEndOfSeven / n) * 100;
    let procentHundred = (countarHundred / n) * 100;

    console.log(`${procentOddSingle.toFixed(2)}%`);
    console.log(`${procentEven.toFixed(2)}%`);
    console.log(`${procentEndOfSeven.toFixed(2)}%`);
    console.log(`${procentHundred.toFixed(2)}%`);
}
lotaryStatistics("49");