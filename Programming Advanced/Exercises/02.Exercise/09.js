function magicMatrices(input) {

    let matrice = input.slice();

    let flag = true;

    let sum1 = matrice[0].reduce((acc, el) => acc + el);

    for (let i = 1; i < matrice.length; i++) {

        let currantSum = matrice[i].reduce((acc, el) => acc + el);

        if (currantSum !== sum1) {

            flag = false;

            break;
        }

    }

    let currSum = 0;

    let index = 0;

    while (index < matrice[0].length) {

        for (let j = 0; j < matrice.length; j++) {

            currSum += matrice[j][index];

        }

        if (currSum !== sum1) {

            flag = false;

            break;

        }

        currSum = 0;

        index++;

    }

    console.log(flag);

}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);