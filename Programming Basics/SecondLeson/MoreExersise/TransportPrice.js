function transportPrice(arg1, arg2) {
    let kilometersTravel = Number(arg1);
    let dayOrNight = arg2.toLowerCase();

    let byTaxiDay = 0.70 + (kilometersTravel * 0.79);
    let byTaxiNight = 0.70 + (kilometersTravel * 0.90);
    let byBus = kilometersTravel * 0.09;
    let byTrain = kilometersTravel * 0.06;

    if (kilometersTravel < 20) {

        if (dayOrNight == 'day') {

            console.log(`${(byTaxiDay).toFixed(2)}`);

        } else {

            console.log(`${(byTaxiNight).toFixed(2)}`);
        }

    } else if (kilometersTravel >= 20 && kilometersTravel < 100) {

        if (dayOrNight == 'day') {

            if (byTaxiDay < byBus) {
                console.log(`${(byTaxiDay).toFixed(2)}`);

            } else {
                console.log(`${(byBus).toFixed(2)}`);
            }
        } else {

            if (byTaxiNight < byBus) {
                console.log(`${(byTaxiNight).toFixed(2)}`);

            } else {
                console.log(`${(byBus).toFixed(2)}`);
            }
        }
    } else if (kilometersTravel >= 100) {

        if (dayOrNight == 'day') {

            if (byTaxiDay < byBus && byTaxiDay < byTrain) {
                console.log(`${(byTaxiDay).toFixed(2)}`);

            } else if (byBus < byTrain && byBus < byTaxiDay) {
                console.log(`${(byBus).toFixed(2)}`);

            } else {
                console.log(`${(byTrain).toFixed(2)}`);
            }
        } else if (dayOrNight == 'night') {

            if (byTaxiNight < byBus && byTaxiNight < byTrain) {
                console.log(`${(byTaxiNight).toFixed(2)}`);

            } else if (byBus < byTrain && byBus < byTaxiNight) {
                console.log(`${(byBus).toFixed(2)}`);

            } else {
                console.log(`${(byTrain).toFixed(2)}`);
            }
        }

    }
}
transportPrice('180', 'night');