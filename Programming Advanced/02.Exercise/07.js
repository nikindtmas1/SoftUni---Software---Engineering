function sortingNumbers(input) {

    let arrCoppy = input.slice();

    let sortedArr = arrCoppy.sort((a, b) => a - b);

    let output = [];

    while (sortedArr.length > 0) {

        let smallest = sortedArr.shift();
        let biggest = sortedArr.pop();

        output.push(smallest);
        output.push(biggest);

    }

    return output;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18,
    56]));
