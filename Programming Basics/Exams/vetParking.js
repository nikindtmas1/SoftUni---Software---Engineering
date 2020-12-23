function vetParking(input) {
    let index = 0;
    let countDay = Number(input[index]);
    index++;
    let dayHours = Number(input[index]);

    let currentPrice = 0;
    let daySum = 0;
    let sum = 0;
    for (let numDay = 1; numDay <= countDay; numDay++) {
        for (let hours = 1; hours <= dayHours; hours++) {
            if (numDay % 2 == 0) {
                if (hours % 2 == 1) {
                    currentPrice = 2.5;
                    sum += currentPrice;
                    daySum += currentPrice;
                } else {
                    currentPrice = 1;
                    sum += currentPrice;
                    daySum += currentPrice;
                }
            } else {
                if (hours % 2 == 0) {
                    currentPrice = 1.25;
                    sum += currentPrice;
                    daySum += currentPrice;
                } else {
                    currentPrice = 1;
                    sum += currentPrice;
                    daySum += currentPrice;
                }
            }
        }
        console.log(`Day: ${numDay} - ${daySum.toFixed(2)} leva`);
        daySum = 0;
    }

    console.log(`Total: ${sum.toFixed(2)} leva`);
}
vetParking([ '2', '5' ]);