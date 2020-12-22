function operationBetweenNumbers(N1, N2, Operator) {
    n1 = Number(N1);
    n2 = Number(N2);
    operator = Operator;

    let typeOperationSum = n1 + n2;
    let typeOperationDifference = n1 - n2;
    let typeOperationMultiplication = n1 * n2;
    let typeOperationDivision = n1 / n2;
    let typeOperationModuleDevision = n1 % n2;

    let result = 0;
    let resultEvenOrOdd = "";

    if (operator == "+") {
        result = typeOperationSum;
        if (result % 2 == 0) {
            resultEvenOrOdd = "even";
        } else {
            resultEvenOrOdd = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultEvenOrOdd}`);
    } else if (operator == "-") {
        result = typeOperationDifference;
        if (result % 2 == 0) {
            resultEvenOrOdd = "even";
        } else {
            resultEvenOrOdd = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultEvenOrOdd}`);
    } else if (operator == "*") {
        result = typeOperationMultiplication;
        if (result % 2 == 0) {
            resultEvenOrOdd = "even";
        } else {
            resultEvenOrOdd = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultEvenOrOdd}`);
    } else if (operator == "/") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
            return;
        } else {
            result = typeOperationDivision;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
    } else if (operator == "%") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
            return;
        } else {
            result = typeOperationModuleDevision;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }

}
operationBetweenNumbers("10", "3", "%");