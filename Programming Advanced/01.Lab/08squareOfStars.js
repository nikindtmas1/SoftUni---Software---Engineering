function squareOfStars(size = 5) {

    let result;

    result = '* '.repeat(size);

    for (let i = 1; i <= size; i++) {
        console.log(result);
    }

}

squareOfStars();