function solve(input) {
    let numberIn = Number(input.shift());
    let balance = 0;
    for (let i = 0; i < numberIn; i++) {
        let amount = Number(input.shift());
        if (amount > 0) {
            balance += amount;
            console.log(`Increase: ${amount.toFixed(2)}`)
        } else if (amount < 0) {
            console.log('Invalid operation!');
        }
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
//solve([ '3', '5.51', '69.42', '100' ]);
//solve([ '3', '120', '45.55', '-150' ]);

function balance(input) {
    let numberDeposit = Number(input.shift());

    let currantDeposid = 0;
    let countarDeposid = 0;
    let invalidDeposid = false;

    while (countarDeposid < numberDeposit) {
        let deposid = Number(input.shift());
        if (deposid < 0) {
            invalidDeposid = true;
            break;

        } else {
            console.log(`Increase: ${deposid.toFixed(2)}`);
            currantDeposid += deposid;
            countarDeposid++;
        }
    }
    if (invalidDeposid == true) {
        console.log(`Invalid operation!`);
        console.log(`Total: ${currantDeposid.toFixed(2)}`);
    } else {
        console.log(`Total: ${currantDeposid.toFixed(2)}`);
    }

}
balance([ '5', '120', '45.55', '-150' ]);