function newHouse(typeFlowers, quantityFlowers, budget) {
    typeFlowers = typeFlowers;
    quantityFlowers = Number(quantityFlowers);
    budget = Number(budget);

    rosesPrice = 5.00;
    dahliasPrice = 3.80;
    tulipsPrice = 2.80;
    narcissusPrice = 3.00;
    gladiolusPrice = 2.50;

    let price = 0;


    switch (typeFlowers) {
        case "Roses": price = rosesPrice;
            if (quantityFlowers > 80) {
                price *= 0.90;
            }
            break;
        case "Dahlias": price = dahliasPrice;
            if (quantityFlowers > 90) {
                price *= 0.85;
            }
            break;
        case "Tulips": price = tulipsPrice;
            if (quantityFlowers > 80) {
                price *= 0.85;
            }
            break;
        case "Narcissus": price = narcissusPrice;
            if (quantityFlowers < 120) {
                price *= 1.15;
            }
            break;
        case "Gladiolus": price = gladiolusPrice;
            if (quantityFlowers < 80) {
                price *= 1.20;
            }
            break;
    }
    let sum = quantityFlowers * price;
    let change = Math.abs(budget - sum).toFixed(2);
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${quantityFlowers} ${typeFlowers} and ${change} leva left.`);
    } else {
        console.log(`Not enough money, you need ${change} leva more.`);
    }
}
newHouse("Narcissus", "119", "360");