function fitnessCard(input) {
    let haveMoney = Number(input.shift());
    let gendar = input.shift();
    let age = Number(input.shift());
    let sport = input.shift();

    let priceFitnessCard = 0;

    if (gendar == 'm') {
        switch (sport) {
            case 'Gym': priceFitnessCard = 42; break;
            case 'Boxing': priceFitnessCard = 41; break;
            case 'Yoga': priceFitnessCard = 45; break;
            case 'Zumba': priceFitnessCard = 34; break;
            case 'Dances': priceFitnessCard = 51; break;
            case 'Pilates': priceFitnessCard = 39; break;
        }
    } else if (gendar == 'f') {
        switch (sport) {
            case 'Gym': priceFitnessCard = 35; break;
            case 'Boxing': priceFitnessCard = 37; break;
            case 'Yoga': priceFitnessCard = 42; break;
            case 'Zumba': priceFitnessCard = 31; break;
            case 'Dances': priceFitnessCard = 53; break;
            case 'Pilates': priceFitnessCard = 37; break;
        }
    }
    if (age <= 19) {
        priceFitnessCard -= priceFitnessCard * 0.20;
    }
    let moneyForFitness = Math.abs(haveMoney - priceFitnessCard);
    if (haveMoney >= priceFitnessCard) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${moneyForFitness.toFixed(2)} more.`);
    }
}
fitnessCard([ '10', 'm', '50', 'Pilates' ]);