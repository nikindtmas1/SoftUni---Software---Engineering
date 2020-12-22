function numberOnThirdPower(arg) {
    let n = Number(arg);
    for (let i = 1; i <= n; i++) {
        let container = i;
        let b = container * container * container;
        if (n % 2 == 0 && container % 2 == 0) {
            console.log(`Current number: ${container}. Cube: ${b}`);
        } else if (n % 2 != 0 && container % 2 != 0) {
            console.log(`Current number: ${container}. Cube: ${b}`);
        }
    }

}
numberOnThirdPower('8');


