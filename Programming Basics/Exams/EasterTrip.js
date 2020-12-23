function easterTrip(input) {
    let destination = input.shift();
    let date = input.shift();
    let numNights = Number(input.shift());

    let tripPrice = 0;

    if (destination == 'France') {
        switch (date) {
            case '21-23': tripPrice = 30; break;
            case '24-27': tripPrice = 35; break;
            case '28-31': tripPrice = 40; break;
        }
    } else if (destination == 'Italy') {
        switch (date) {
            case '21-23': tripPrice = 28; break;
            case '24-27': tripPrice = 32; break;
            case '28-31': tripPrice = 39; break;
        }
    } else if (destination == 'Germany') {
        switch (date) {
            case '21-23': tripPrice = 32; break;
            case '24-27': tripPrice = 37; break;
            case '28-31': tripPrice = 43; break;
        }
    }
    let sumTrip = tripPrice * numNights;
    console.log(`Easter trip to ${destination} : ${sumTrip.toFixed(2)} leva.`)
}
easterTrip([ 'France', '28-31', '8', '' ]);