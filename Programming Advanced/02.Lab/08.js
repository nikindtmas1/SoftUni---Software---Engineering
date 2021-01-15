function processOddPositions(input) {

    let array = input.slice();

    const output = array.filter((x, index) => index % 2 == 1).map((x) => x * 2).reverse();


    return output.join(' ');

}

console.log(processOddPositions([10, 15, 20, 25]));
