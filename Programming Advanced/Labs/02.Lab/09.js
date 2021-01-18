function biggestElement(input) {

    let output = [];

    input.forEach(line => {
        let currOutput = line.reduce((acc, el) => {
            if (el > acc) {
                acc = el;
                return acc;
            } else {
                return acc;
            }
        })
        output.push(currOutput)
    });


    const maxOutput = output.reduce((acc, el) => {
        if (el > acc) {
            acc = el;
            return acc;
        } else {
            return acc;
        }
    });

    console.log(maxOutput);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);