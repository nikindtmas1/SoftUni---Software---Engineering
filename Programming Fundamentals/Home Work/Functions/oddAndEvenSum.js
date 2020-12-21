function oddAndEvenSum(number) {

    let sumEven = 0;

    let sumOdd = 0;

    let numStr = '' + number;

    for (let i = 0; i < numStr.length; i++) {

        if (Number(numStr[i]) % 2 == 0) {

            sumEven += Number(numStr[i]);

        } else {

            sumOdd += Number(numStr[i]);
        }
    }

    let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;

    return result;
    

}