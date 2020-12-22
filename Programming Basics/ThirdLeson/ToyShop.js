function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let excursionPrice = Number(arg1);
    let quantityPuzles = Number(arg2);
    let quantityDolls = Number(arg3);
    let quantityBears = Number(arg4);
    let quantityMinions = Number(arg5);
    let quantityTrucks = Number(arg6);

    let sum = ((quantityPuzles * 2.60) + (quantityDolls * 3) + (quantityBears * 4.10) + 
    (quantityMinions * 8.20) + (quantityTrucks * 2));
    
    let quantityToys = (quantityPuzles + quantityDolls + quantityBears + quantityMinions + quantityTrucks);
    if (quantityToys >= 50) {
        sum = sum - (sum * 0.25);
        profit = sum - (sum * 0.10);
        if (profit >= excursionPrice) {
            rest = profit - excursionPrice;
            console.log(`Yes! ${rest.toFixed(2)} lv left.`);
        } else {
            rest = excursionPrice - profit;
            console.log(`Not enough money! ${rest.toFixed(2)} lv needed.`);
        }
    } else {
        profit = sum - (sum * 0.10);
        if (profit >= excursionPrice) {
            rest = profit - excursionPrice;
            console.log(`Yes! ${rest.toFixed(2)} lv left.`);
        } else {
            rest = excursionPrice - profit;
            console.log(`Not enough money! ${rest.toFixed(2)} lv needed.`);
        }

    }
}
toyShop("40.8", "20", "25", "30", "50", "10");
toyShop("320", "8", "2", "5", "5", "1");