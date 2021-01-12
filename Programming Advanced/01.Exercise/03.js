function solveSameNumbers(number) {

    const str = number.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let currant = sum + Number(str[i]);
        let next = str[i + 1];
        if (str[i] !== str[i + 1] && next !== undefined) {
            isSame = false;
        }

        sum = currant;
    }

    return `${isSame} \n ${sum}`;

}

console.log(solveSameNumbers(2222222));
console.log(solveSameNumbers(1234));