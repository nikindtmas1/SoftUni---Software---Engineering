function rotateArray(arg1, arg2) {

    let inputArr = arg1.slice();

    let rotation = Number(arg2);

    for (let i = 0; i < rotation; i++) {

        let currantEl = inputArr.pop();

        inputArr.unshift(currantEl);

    }

    return inputArr.join(' ');

}

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));
