function convertUsdToBgn(arg1){
let usd = Number(arg1);
let bgn = (usd * 1.79549).toFixed(2);

console.log(bgn);
}
convertUsdToBgn("20");
convertUsdToBgn("100");
convertUsdToBgn("12.5");