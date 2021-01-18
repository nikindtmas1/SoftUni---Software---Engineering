function evenPosition(input) {

    let coppyArr = input.slice();

    let result = [];

    for (let i = 0; i < coppyArr.length; i++) {

        if (i % 2 == 0) {

            result.push(coppyArr[i]);

        }
    }

    return result.join(' ');

}

console.log(evenPosition(['20', '30', '40', '50', '60']));
console.log(evenPosition(['5', '10']));
