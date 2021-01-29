function sortArray(input, arg) {

    let typeSort = arg;

    if (typeSort == 'asc') {
        return ascSort(input)
    } else if (typeSort == 'desc') {

        return descSort(input);
    }

    function ascSort(inputArr) {

        let sortedArr = inputArr.sort((a, b) => a - b);

        return sortedArr;

    }

    function descSort(inputArr) {

        let sortedDes = inputArr.sort((a, b) => b - a);

        return sortedDes;

    }

}
let output = console.log(sortArray([3, 1, 2, 10], 'desc'));
