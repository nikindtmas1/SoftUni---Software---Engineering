function lastKNumbers(arg1, arg2) {

    let n = Number(arg1);
    let k = Number(arg2);

    let result = [];

    let length = n;

    let firstNum = 1;

    result.push(firstNum);

    let index = 1;

    while (index < length) {

        let sum = 0;

        for (let i = index - k; i < index; i++) {

            if (i >= 0) {

                sum += result[i];
            }


        }

        result.push(sum);

        index++;
    }

    return result;
}

console.log(lastKNumbers(8, 2));

