function vegetableAndFruits([arg1, arg2, arg3, arg4]) {
    let vegetablePrice = parseFloat(arg1);
    let fruitPrice = parseFloat(arg2);
    let vegetableQuantity = parseInt(arg3);
    let fruitQuantity = parseInt(arg4);

    let revenu = (vegetablePrice * vegetableQuantity) + (fruitPrice * fruitQuantity);
    let revenuEuro = (revenu / 1.94).toFixed(2);

    console.log(revenuEuro);


}
vegetableAndFruits(["0.194", "19.4", "10", "10"]);
vegetableAndFruits(["1.5", "2.5", "10", "10"]);
// More exercises

function vegMarket(arg1, arg2, arg3, arg4) {
    let vegPrice = Number(arg1);
    let fruitPrice = Number(arg2);
    let quantityVeg = Number(arg3);
    let quantityFruit = Number(arg4);

    let vegValue = quantityVeg * vegPrice;
    let fruitValue = quantityFruit * fruitPrice;
    let totalValueLv = vegValue + fruitValue;

    let valueEuro = totalValueLv / 1.94;

    console.log(valueEuro.toFixed(2));
}
vegMarket("0.194", "19.4", "10", "10");
vegMarket("1.5", "2.5", "10", "10");
