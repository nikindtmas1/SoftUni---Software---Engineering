function smolesTwoNum(input) {

    let coppy = input.slice();

    let sorted = coppy.sort((a, b) => a - b);

    let output = [];

    for (let i = 0; i < 2; i++) {

        output.push(sorted[i]);

    }

    console.log(output.join(' '));

}

smolesTwoNum([3, 0, 10, 4, 7, 3]);