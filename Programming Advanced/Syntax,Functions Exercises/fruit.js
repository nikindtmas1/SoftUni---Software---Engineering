function solveFruit(typeFruit, weight, price){

    const product = typeFruit;
    const weightKg = weight / 1000;

    const money = weightKg * price;

    return `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${product}.`;

}

console.log(solveFruit('orange', 2500, 1.80));
console.log(solveFruit('apple', 1563, 2.35));