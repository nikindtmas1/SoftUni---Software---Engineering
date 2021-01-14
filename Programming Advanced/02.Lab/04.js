function negativePositive(input) {

    let coppy = input.slice();

    let output = [];

    for (let i = 0; i < coppy.length; i++) {

        let curr = coppy[i];

        if (curr < 0) {

            output.unshift(curr);

        } else {

            output.push(curr);

        }
    }

    output.forEach(element => {
        console.log(element);
    });

}

negativePositive([3, -2, 0, -1])