function honeyWinterReserves(input) {
    let honeyWinterNeed = Number(input.shift());
    let nameBee = input.shift();

    let honeyWinter = 0;
    let countar = 0;
    while (nameBee != 'Winter has come') {
        while (countar < 6) {
            honey = input.shift();
            
                honeyWinter += Number(honey);
                countar++;
            
        }
        if (honeyWinter < 0) {
            console.log(`${nameBee} was banished for gluttony`);
            //honeyWinter = 0;
            countar = 0;
            nameBee = input.shift();
        } else if (honeyWinter >= honeyWinterNeed) {
            let leftHoney = Math.abs(honeyWinter - honeyWinterNeed);
            console.log(`Well done! Honey surplus ${leftHoney.toFixed(2)}.`);
            nameBee = input.shift();

        } else {
            let neededHoney = Math.abs(honeyWinter - honeyWinterNeed);
            console.log(`Hard Winter! Honey needed ${neededHoney.toFixed(2)}.`);
            nameBee = input.shift();
        }

    }

}
honeyWinterReserves([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
  ]
  );