function solve(arg1) {

    let number = arg1.toString();
    let sum = 0;
    let isSame = true;
    let currNum = 0;

    for (let i = 0; i < number.length; i++) {

        sum += Number(number[i]);

        if (i > 0 && Number(number[i]) !== currNum) {
            isSame = false;
        }

        currNum = Number(number[i]);

    }

    console.log(isSame);
    console.log(sum);

}

solve(2222222);
solve(1234);
