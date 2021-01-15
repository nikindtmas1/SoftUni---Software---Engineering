function printAnArray(arg1, arg2) {

    let inputArr = arg1.slice();
    let delimeter = arg2;

    console.log(inputArr.join(`${delimeter}`));

}

printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '->')