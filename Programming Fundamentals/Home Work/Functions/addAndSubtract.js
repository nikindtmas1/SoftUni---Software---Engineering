function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    //let sumResult = 0;

    function sum() {

        sumResult = firstNumber + secondNumber;
        //return sumResult;

    }
    sum();

    function substract() {

        let substractResult = sumResult - thirdNumber;
        return substractResult;

    }
    let result = substract()

    console.log(result);
}