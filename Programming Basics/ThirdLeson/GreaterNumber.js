function greaterNum(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
greaterNum("-5", "5");