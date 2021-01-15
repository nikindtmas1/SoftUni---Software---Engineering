function printEvery(arg1, arg2) {

    let inputArr = arg1.slice();
    let element = Number(arg2);

    let index = 0;

    let output = [];

    for (let i = index; i < inputArr.length; i += element) {

        output.push(inputArr[i]);

    }

    return output;

}

console.log(printEvery([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));
