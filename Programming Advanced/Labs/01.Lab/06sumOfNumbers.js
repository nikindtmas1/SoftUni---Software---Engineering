function sumOfNumbers(num1, num2) {

    let n = Number(num1);
    let m = Number(num2);
    let sum = 0;

    for (let i = n; i <= m; i++) {

        sum += i;
    }

    return sum;

}

console.log(sumOfNumbers(1, 5));
console.log(sumOfNumbers(-8, 20));