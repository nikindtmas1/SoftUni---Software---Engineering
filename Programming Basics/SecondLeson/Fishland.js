function fishland([arg1,arg2,arg3,arg4,arg5]){
    let priceMackerel = parseFloat(arg1);
    let priceToy = parseFloat(arg2);
    let weightChamois = parseFloat(arg3);
    let weightHorsMackerel = parseFloat(arg4);
    let weightMussels = parseFloat(arg5);

    let sumChamois = (priceMackerel*1.6)*weightChamois;
    let sumHorsMackerel = (priceToy*1.8)*weightHorsMackerel;
    let sumMussels = weightMussels*7.50; 

    let totalSum = (sumChamois + sumHorsMackerel + sumMussels).toFixed(2);

    console.log(totalSum);

}
fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);
fishland(["7.79", "5.35", "9.3", "0", "0"]);

//More exercises

function fishMarket(arg1, arg2, arg3, arg4, arg5) {
    let priceFish1 = Number(arg1);
    let priceFish2 = Number(arg2);
    let kilogramFish3 = Number(arg3);
    let kilogramFish4 = Number(arg4);
    let kilogramMussels = Number(arg5);

    let priceFish3 = priceFish1 + priceFish1 * 0.60;
    let sumFish3 = priceFish3 * kilogramFish3;

    let priceFish4 = priceFish2 + priceFish2 * 0.80;
    let sumFish4 = priceFish4 * kilogramFish4;

    let sumMussels = kilogramMussels * 7.50;

    let totalSum = sumFish3 + sumFish4 + sumMussels;

    console.log(totalSum.toFixed(2));
}
fishMarket("6.90", "4.20", "1.5", "2.5", "1");
fishMarket("5.55", "3.57", "4.3", "3.6", "7");
fishMarket("7.79", "5.35", "9.3", "0", "0");