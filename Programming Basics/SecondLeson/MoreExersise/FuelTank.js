function fuelTank(arg1, arg2) {
    let fuel = arg1.toLowerCase();
    let litersFuelHave = Number(arg2);

    if (fuel == 'diesel' || fuel == 'gasoline' || fuel == 'gas') {

        if (litersFuelHave >= 25) {

            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}
fuelTank('Gasoline', '28');