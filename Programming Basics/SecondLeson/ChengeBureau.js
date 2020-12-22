//Задача за изпит!!!
function changeBureu([arg1,arg2,arg3]){
let quantityBitcoin = Number(arg1);
let quantityYuanChine = Number(arg2);
let comisionBureu = Number(arg3);

let coinToLv = quantityBitcoin * 1168;
let usdToLv = quantityYuanChine * 0.15 * 1.76;//!!!!!!!!
let totalLv = coinToLv + usdToLv;

let euro = totalLv / 1.95;
let totalEuro = (euro * (1-comisionBureu/100));

console.log(totalEuro.toFixed(2));
}
changeBureu(["7", "50200.12", "3"]);
//

function money([arg1,arg2,arg3]){
    let bitcoins = Number(arg1);
    let chYuana = Number(arg2);
    let commision = Number(arg3);

    let bitcoinsInLv = bitcoins * 1168;
    let yuanaInLv = chYuana * 0.15 * 1.76;
    let sumInLv = bitcoinsInLv + yuanaInLv;

    let sumInEur = sumInLv / 1.95;
    let sumInEurWithCommision = sumInEur * (1-commision / 100);
    console.log(sumInEurWithCommision.toFixed(2));
}