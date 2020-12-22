function alkoholMarket(arg1,arg2,arg3,arg4,arg5){
let whiskeyPrice = Number(arg1);
let beerLit = Number(arg2);
let wineLit = Number(arg3);
let rakiqLit = Number(arg4);
let whiskeyLit = Number(arg5);

let rakiqPrice = whiskeyPrice/2;
let winePrice = rakiqPrice - (rakiqPrice*0.4);
let beerPrice = rakiqPrice - (rakiqPrice* 0.8);

let rakiqSum = rakiqLit * rakiqPrice;
let wineSum = wineLit * winePrice;
let beerSum = beerLit * beerPrice;
let whiskeySum = whiskeyLit * whiskeyPrice;

let totalSum = rakiqSum + wineSum + beerSum + whiskeySum;
console.log(`${totalSum.toFixed(2)}`);
}
alkoholMarket("50", "10", "3.5", "6.5", "1");
alkoholMarket("63.44", "3.57", "6.35", "8.15", "2.5");