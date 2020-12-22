function veriSpecialNum(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);
    let veriSpecialNumber = n * n;


    for (let i = start; i <= end; i++) {
        let container = i;
        if (container % n == 0 && container % veriSpecialNumber == 0) {
            console.log('Very special number: ' + container);
        } else if (container % n == 0) {
            console.log('Special number: ' + container);
        } else {
            console.log(container);
        }

    }
}
veriSpecialNum('10', '30', '7');