function skiTrip(days, typeRoom, feedback) {
    days = Number(days);
    typeRoom = typeRoom;
    feedback = feedback;

    let roomForOnePerson = 18.00;
    let apartmentPrice = 25.00;
    let presidentApartment = 35.00;
    let nights = days - 1;

    let currentPrice = 0;


    if (days < 10) {
        if (typeRoom == "room for one person") {
            currentPrice = roomForOnePerson;
        } else if (typeRoom == "apartment") {
            currentPrice = apartmentPrice - (apartmentPrice * 0.30);
        } else if (typeRoom == "president apartment") {
            currentPrice = presidentApartment - (presidentApartment * 0.10);
        }
        if (feedback == "positive") {
            currentPrice *= 1.25;
        } else if (feedback == "negative") {
            currentPrice = currentPrice - (currentPrice * 0.10);
        }
    } else if (days < 15) {
        if (typeRoom == "room for one person") {
            currentPrice = roomForOnePerson;
        } else if (typeRoom == "apartment") {
            currentPrice = apartmentPrice - (apartmentPrice * 0.35);
        } else if (typeRoom == "president apartment") {
            currentPrice = presidentApartment - (presidentApartment * 0.15);
        }
        if (feedback == "positive") {
            currentPrice *= 1.25;
        } else if (feedback == "negative") {
            currentPrice = currentPrice - (currentPrice * 0.10);
        }
    } else if (days > 15) {
        if (typeRoom == "room for one person") {
            currentPrice = roomForOnePerson;
        } else if (typeRoom == "apartment") {
            currentPrice = apartmentPrice - (apartmentPrice * 0.50);
        } else if (typeRoom == "president apartment") {
            currentPrice = presidentApartment - (presidentApartment * 0.20);
        }
        if (feedback == "positive") {
            currentPrice *= 1.25;
        } else if (feedback == "negative") {
            currentPrice = currentPrice - (currentPrice * 0.10);
        }
    }

    let sum = nights * currentPrice;
    console.log(`${sum.toFixed(2)}`);
}
skiTrip("2", "apartment", "positive");