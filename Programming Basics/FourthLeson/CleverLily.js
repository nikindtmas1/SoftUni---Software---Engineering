function cleverLily(ageLily, priceLaundry, priceToy) {
    ageLily = Number(ageLily);
    priceLaundry = Number(priceLaundry);
    priceToy = Number(priceToy);

    let giftMoney = 0;
    let bradarMoney = 1.00;
    let countarEvenAge = 0;
    let savedMoney = 0;
    let countarGivedToy = 0;
    let countarBradar = 0;

    for (let i = 1; i <= ageLily; i++) {

        if (i % 2 != 0) {
            countarGivedToy++;
        } else if (i % 2 == 0) {
            countarEvenAge++;
            countarBradar++;
            giftMoney = giftMoney + 10;
            savedMoney += giftMoney;
        }

    }
    let moneyLily = (savedMoney + (countarGivedToy * priceToy)) - (countarBradar * bradarMoney);
    let change = Math.abs(moneyLily - priceLaundry).toFixed(2);
    if (moneyLily >= priceLaundry) {
        console.log(`Yes! ${change}`);
    } else {
        console.log(`No! ${change}`);
    }

}
cleverLily("10", "1570.98", "6");