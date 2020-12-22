function journey(budget, season) {
    budget = Number(budget);
    season = season.toLowerCase();

    let destination = "";
    let location = "";
    let currentPrice = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            currentPrice = budget * 0.30;
            location = "Camp";
        } else if (season == "winter") {
            currentPrice = budget * 0.70;
            location = "Hotel";
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            currentPrice = budget * 0.40;
            location = "Camp";
        } else if (season == "winter") {
            currentPrice = budget * 0.80;
            location = "Hotel";
        }

    } else if (budget > 1000) {
        destination = "Europe";
        if (season == "summer" || season == "winter") {
            currentPrice = budget * 0.90;
            location = "Hotel";
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${location} - ${currentPrice.toFixed(2)}`);
}
journey("1500", "summer");