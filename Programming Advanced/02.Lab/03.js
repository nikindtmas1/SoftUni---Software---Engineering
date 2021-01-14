function sumFirsthLast(input) {

    let coppyArr = input.slice();

    let fisrtEl = Number(coppyArr.shift());
    let lastEL = Number(coppyArr.pop());

    let sumEL = fisrtEl + lastEL;

    return sumEL;


}

console.log(sumFirsthLast([20, 30, 40]));
console.log(sumFirsthLast([5, 10]));
