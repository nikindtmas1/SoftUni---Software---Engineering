function biggerHalf(input) {

    let sortedArr = input.sort((a, b) => a - b);

    let length = sortedArr.length;

    if (length % 2 == 0) {

        return sortedArr.slice(length / 2);

    } else {

        let index = (length - 1) / 2;

        return sortedArr.slice(index);
    }


}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
