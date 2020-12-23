function maxNumber(input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (maxNumber < number) {
            maxNumber = number;
        }

    }
    console.log(maxNumber);
}
//maxNumber([ '5', '-5000', '-4000', '-3000', '-2000', '-1000' ]);

function maxNumber(input) {
    let countNumbes = Number(input.shift());

    let maxNum = Number.NEGATIVE_INFINITY;
    let countarNumbers = 0;

    while (countarNumbers < countNumbes) {
        let nexNum = Number(input.shift());
        if (nexNum > maxNum) {
            maxNum = nexNum;
            countarNumbers++;
        } else {
            maxNum = maxNum;
            countarNumbers++;
        }
    }
    console.log(`${maxNum}`);
}
maxNumber([ '2',  '-1', '-2' ]);