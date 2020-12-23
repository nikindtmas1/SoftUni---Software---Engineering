function sumOfTwoNumbers(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNum = Number(input.shift());

    let x1Num = 0;
    let x2Num = 0;
    let countarCombYes = 0;
    let countarCombNo = 0;
    let countarTotal = 0;
    let good = false;

    for (let x1 = start; x1 <= end; x1++) {
        for (let x2 = start; x2 <= end; x2++) {
            countarTotal++;
            if (x1 + x2 == magicNum) {
                x1Num = x1;
                x2Num = x2;
                countarCombYes++;
                if (countarCombYes == 1) {
                    console.log(`Combination N:${countarTotal} (${x1Num} + ${x2Num} = ${magicNum})`);
                }
                good = true;

            } else {
                countarCombNo++;

            }
        }
    }
    if (good == false) {
        console.log(`${countarCombNo} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers([ '1', '10', '5' ]);
