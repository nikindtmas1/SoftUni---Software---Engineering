function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    if (
         firstNumber <= secondNumber &&
        firstNumber <= thirdNumber) {

        smallesNum = firstNumber;

    } else if (
        secondNumber <= firstNumber &&
        secondNumber <= thirdNumber) {

        smallesNum = secondNumber;

    } else if (
        thirdNumber <= firstNumber &&
        thirdNumber <= secondNumber) {

        smallesNum = thirdNumber;
    }

    return smallesNum;
}