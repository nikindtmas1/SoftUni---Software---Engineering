"use strict";
function app(num1, num2, resultType, phrase) {
    const result = num1 + num2;
    if (resultType) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const showResult = true;
const phrase = 'The result is: ';
const result = app(number1, number2, showResult, phrase);
