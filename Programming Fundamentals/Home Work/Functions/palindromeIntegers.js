function palindromeIntegers(inputArr) {

    let n = inputArr.length;

    let index = 0;

    let inputNum = inputArr[index];

    let strInputNum = '' + inputNum;

    let strOutputNum = '';

    let outputNum = 0;

    let countar = 0;

    let isFine = true;

    while (countar < n) {

        for (let i = strInputNum.length - 1; i >= 0; i--) {

            strOutputNum += strInputNum[i];

        }
        outputNum = Number(strOutputNum);

        if (inputNum === outputNum) {

            isFine = true;

            console.log(isFine);

        } else {

            isFine = false;

            console.log(isFine);

        }

        countar++;
        index++;
        inputNum = inputArr[index];
        strInputNum = '' + inputNum;
        strOutputNum = '';
        outputNum = 0;

    }

}