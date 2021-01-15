function diagonalSums(input) {

    let firstDiag = 0;
    let secondDiag = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;

    input.forEach(line => {

        firstDiag += line[firstIndex];
        firstIndex++;
        secondDiag += line[secondIndex];
        secondIndex--;

    });

    console.log(`${firstDiag} ${secondDiag}`);

}

diagonalSums([[20, 40],
    [10, 60]]);