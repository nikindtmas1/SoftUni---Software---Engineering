function hotelRoom(month, numNights) {
    month = month.toLowerCase();
    numNights = Number(numNights);

    let studioPriceNight = 0;
    let apartmentPriceNight = 0;


    if (month == "may" || month == "october") {
        studioPriceNight = 50.00;
        apartmentPriceNight = 65.00;
        if (numNights > 14) {
            studioPriceNight *= 0.70;
            apartmentPriceNight *= 0.90;
        } else if (numNights > 7) {
            studioPriceNight *= 0.95;
        }
    } else if (month == "june" || month == "september") {
        studioPriceNight = 75.20;
        apartmentPriceNight = 68.70;
        if (numNights > 14) {
            studioPriceNight *= 0.80;
            apartmentPriceNight *= 0.90;
        }
    } else if (month == "july" || month == "august") {
        studioPriceNight = 76.00;
        apartmentPriceNight = 77.00;
        if (numNights > 14) {
            apartmentPriceNight *= 0.90;
        }
    }
    let sumStudio = numNights * studioPriceNight;
    let sumApartment = numNights * apartmentPriceNight;

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
hotelRoom("August", "20");