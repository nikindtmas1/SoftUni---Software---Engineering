function bombNumber(inputArr, bombInfo) {

    let bomb = bombInfo[0];

    let range = bombInfo[1];

    let index = inputArr.indexOf(bomb);

    while (index > -1) {

        inputArr.splice(Math.max((index - range), 0), Math.min(range, index));
        index = inputArr.indexOf(bomb);

        inputArr.splice(index = index, range + 1);
        index = inputArr.indexOf(bomb);

    }

    let output = 0;
    for (let element of inputArr) {

        output += element;
    }

    console.log(output);

}

bombNumber([
    1, 2, 2, 4,
    2, 2, 2, 9
  ], [ 4, 2 ]);