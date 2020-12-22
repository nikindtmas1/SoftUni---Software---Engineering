function godzilaVsKong(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let quantityStatist = Number(arg2);
    let oneCloth = Number(arg3);
    let sumDecore = budget * 0.1;
    let sumClothes = quantityStatist * oneCloth;
    if (quantityStatist >= 150) {
        sumClothes = sumClothes - (sumClothes * 0.1)
    }
    let totalSum = sumDecore + sumClothes;
    let balans = budget - totalSum;

    if (budget < totalSum) {
        balans = totalSum - budget;
        console.log(`Not enough money!\nWingard needs ${balans.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!\nWingard starts filming with ${balans.toFixed(2)} leva left.`);
    }
}
//godzilaVsKong("15437.62", "186", "57.99");

function godzillaVsKong(arg1, arg2, arg3) {
    let budgetFilm = Number(arg1);
    let numberStatists = Number(arg2);
    let priceClothes = Number(arg3);

    let decore = budgetFilm * 0.10;
    let costsClothes = priceClothes * numberStatists;

    if (numberStatists > 150) {
        costsClothes = costsClothes - (costsClothes * 0.10);
    }
    let costsFilm = decore + costsClothes;

    if (costsFilm > budgetFilm) {
        let needesMoney = costsFilm - budgetFilm;
        console.log('Not enough money!');
        console.log(`Wingard needs ${needesMoney.toFixed(2)} leva more.`);
    } else {
        let moreMoney = budgetFilm - costsFilm;
        console.log('Action!');
        console.log(`Wingard starts filming with ${moreMoney.toFixed(2)} leva left.`)
    }
}
godzillaVsKong();