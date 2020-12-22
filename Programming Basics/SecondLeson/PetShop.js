function petShop(arg1,arg2){
let quantityDogs = Number(arg1);
let quantityAnimals = Number(arg2);

let sumDogs = (quantityDogs) * 2.5;
let sumAnimals = (quantityAnimals) * 4;

let totalSum = (sumDogs + sumAnimals);

console.log(totalSum.toFixed(2) + " lv." );
}
petShop("13", "9");