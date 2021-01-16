function extractSubsequence(input) {

    let array = input.slice();

    let result = [];

    result.push(array[0]);

    let currantNum;


    for (let i = 1; i < array.length; i++) {

        currantNum = array[i];

        let lastNum = result[result.length - 1];

        if (currantNum >= lastNum) {

            result.push(currantNum);

        }

    }

    return result;

}

console.log(extractSubsequence([20,
    3,
    2,
    15,
    6,
    1]));