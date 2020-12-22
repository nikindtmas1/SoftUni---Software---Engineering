function invalidNumber(input) {
    let num = Number(input);

    if (num >= 100 && num <= 200 || num == 0) {

    } else {
        console.log('invalid');
    }

}
invalidNumber('201');