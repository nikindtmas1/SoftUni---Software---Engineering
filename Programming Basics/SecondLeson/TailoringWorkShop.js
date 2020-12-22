function tailoringWorkShop(arg1,arg2,arg3){
let quantityTable = Number(arg1);
let lengthTable = Number(arg2);
let widthTable = Number(arg3);

let tableClothArea = quantityTable *(lengthTable + 2 * 0.30) * (widthTable + 2 * 0.30);
let quatsTableArea = quantityTable*(lengthTable/2) * (lengthTable/2);
let totalValueUsd = (tableClothArea * 7) + (quatsTableArea * 9);
let totalValueLeva = totalValueUsd*1.85;

console.log(totalValueUsd.toFixed(2) + " USD");
console.log(totalValueLeva.toFixed(2) + " BGN");
}
tailoringWorkShop("5", "1", "0.5");
tailoringWorkShop("10", "1.20", "0.65");
//
function tailoringWorkShopNex(arg1,arg2,arg3){
    let quantityTable = Number(arg1);
    let lengthTable = Number(arg2);
    let widthTable = Number(arg3);
    
    let tableClothArea = quantityTable*(lengthTable + (2 * 0.30)) * (widthTable + (2 * 0.30));
    let valueTableCloth = (tableClothArea * 7);
    
    let quatsTableArea = quantityTable*(lengthTable/2) * (lengthTable/2);
    let valueQuatsTable = (quatsTableArea * 9);
    
    let totalValueUsd = (valueTableCloth + valueQuatsTable).toFixed(2);
    let totalValueLeva = (totalValueUsd*1.85).toFixed(2);
    
    console.log(totalValueUsd + " USD");
    console.log(totalValueLeva + " BGN");
    }
    tailoringWorkShopNex("5", "1.00", "0.5");
    tailoringWorkShopNex("10", "1.20", "0.65");