function changeTiles([arg1,arg2,arg3,arg4,arg5]){
let lengthSquare = Number(arg1);
let widthTiles = Number(arg2);
let lengthTiles = Number(arg3);
let widthBench = Number(arg4);
let lengthBench = Number(arg5);

let squareArea = lengthSquare*lengthSquare;
let benchArea = widthBench*lengthBench;
let tilesArea = lengthTiles*widthTiles;
let areaWithTiles = squareArea-benchArea;
let quantityTiles = (areaWithTiles / tilesArea).toFixed(2);
let timeChangeTiles = (quantityTiles * 0.2).toFixed(2);

    console.log(quantityTiles);
    console.log(timeChangeTiles);
}
changeTiles(["20", "5", "4", "1", "2"]);
changeTiles(["40", "0.8", "0.6", "3", "5"]);