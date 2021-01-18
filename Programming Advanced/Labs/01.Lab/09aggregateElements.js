function aggregateElements(input) {

    let operations = input.slice();

    let sum = 0;
    let inverSum = 0;
    let concateIn = '';

    for (let i = 0; i < operations.length; i++) {

        sum += operations[i];
    }

    console.log(sum);

    for (let j = 0; j < operations.length; j++) {

        inverSum += 1 / operations[j];
    }

    console.log(inverSum);

    for (let g = 0; g < operations.length; g++) {
        let currant = operations[g];
        concateIn += currant
    }

    console.log(concateIn);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);