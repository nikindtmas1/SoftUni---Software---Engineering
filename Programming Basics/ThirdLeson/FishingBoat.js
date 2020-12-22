function fishingBoat(budget, season, fishingPeopleCount) {
    budget = Number(budget);
    season = season;
    fishingPeopleCount = Number(fishingPeopleCount);

    let boatSpringPrice = 3000.00;
    let boatSummerAutumnPrice = 4200.00;
    let boatWinterPrice = 2600.00;

    let currentPrice = 0;

    switch (season) {
        case "Spring": currentPrice += boatSpringPrice;
            if (fishingPeopleCount % 2 == 0) {
                currentPrice *= 0.95;
            }
            break;
        case "Summer": currentPrice += boatSummerAutumnPrice;
            if (fishingPeopleCount % 2 == 0) {
                currentPrice *= 0.95;
            }
            break;
        case "Autumn": currentPrice += boatSummerAutumnPrice; break;
        case "Winter": currentPrice += boatWinterPrice;
            if (fishingPeopleCount % 2 == 0) {
                currentPrice *= 0.95;
            }
            break;
    }
    if (fishingPeopleCount <= 6) {
        currentPrice *= 0.90;
    } else if (fishingPeopleCount <= 11 ) { //&& fishingPeopleCount >= 7
        currentPrice *= 0.85;
    } else if (fishingPeopleCount >= 12) {
        currentPrice *= 0.75;
    }
    let change = Math.abs(budget - currentPrice).toFixed(2);
    if (budget >= currentPrice) {
        console.log(`Yes! You have ${change} leva left.`);
    } else if (currentPrice > budget) {
        console.log(`Not enough money! You need ${change} leva.`);
    }
}
fishingBoat("2000", "Winter", "13");

