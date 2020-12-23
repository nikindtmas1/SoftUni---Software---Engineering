function easterBakery(input) {
    let flourPriceKilo = Number(input.shift());
    let kiloFlour = Number(input.shift());
    let kiloSugar = Number(input.shift());
    let countEggShell = Number(input.shift());
    let countYeastBread = Number(input.shift());

    let flourSum = flourPriceKilo * kiloFlour;
    let sugarPrice = flourPriceKilo - (flourPriceKilo * 0.25);
    let sugarSum = sugarPrice * kiloSugar;
    let eggShellPrice = flourPriceKilo + (flourPriceKilo * 0.10);
    let eggShellSum = eggShellPrice * countEggShell;
    let yeastBreadPrice = sugarPrice - (sugarPrice * 0.80);
    let yeastBreadSum = yeastBreadPrice * countYeastBread;

    let totalSum = flourSum + sugarSum + eggShellSum + yeastBreadSum;


    console.log(`${totalSum.toFixed(2)}`);

}
easterBakery([ '63.44', '3.57', '6.35', '8', '2' ]);