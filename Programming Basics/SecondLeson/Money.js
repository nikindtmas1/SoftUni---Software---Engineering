function changeMoney(arg1,arg2,arg3){
let bitcoin = Number(arg1);
let chineseYuan = Number(arg2);
let comision = Number(arg3);

let levaFirst = bitcoin * 1168;
let usd = chineseYuan * 0.15;
let levaSecond = usd * 1.76;
let euro = (levaFirst + levaSecond) / 1.95;
let euroMoney = (euro - (euro * (comision/100))); 

console.log(euroMoney.toFixed(2));
}
changeMoney("1", "5", "5");
changeMoney("20", "5678", "2.4");
changeMoney("7", "50200.12", "3");