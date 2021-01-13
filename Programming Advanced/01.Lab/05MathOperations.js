function mathOperations(num1, num2, strIn) {

    let resulr = 0;

    switch (strIn) {

        case '+': resulr = num1 + num2
            break;
        case '-': resulr = num1 - num2
            break;
        case '*': resulr = num1 * num2
            break;
        case '/': resulr = num1 / num2
            break;
        case '%': resulr = num1 % num2
            break;
        case '**': resulr = Math.pow(num1, num2)
            break;
    }

    return resulr;

}

console.log(mathOperations(10, 3, '%'));
console.log(mathOperations(4, 2, '**'));;