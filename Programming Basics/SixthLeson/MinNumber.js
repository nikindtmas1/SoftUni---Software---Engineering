function minNumber(input) {
    let n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (minNumber > number) {
            minNumber = number;
        }
    }
    console.log(minNumber);
}
//minNumber([ '3', '-10', '20', '-30' ]);

function minNumber(input) {
    let countNumbers = Number(input.shift());

    let minNum = Number.MAX_SAFE_INTEGER;
    let countarNum = 0;

    while (countarNum < countNumbers) {
        let nexNum = Number(input.shift());
        if (nexNum < minNum) {
            minNum = nexNum;
            countarNum++;
        } else {
            minNum = minNum;
            countarNum++;
        }
    }
    console.log(`${minNum}`);
}
minNumber([ '4', '45', '-20', '7', '99' ]);