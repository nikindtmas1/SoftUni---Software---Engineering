function triangleArea([arg1,arg2]){
let a = parseFloat(arg1);
let h = parseFloat(arg2);

let area = (a * h / 2).toFixed(2);

console.log("Triangle area = " + area);

}
triangleArea(["20", "30"]);
triangleArea(["15", "35"]);
triangleArea(["7.75", "8.45"]);
triangleArea(["1.23456", "4.56789"]);
//More exercises

function triangleAre(arg1,arg2){
let a = Number(arg1);
let h = Number(arg2);

let trianAr = a * h/2;
console.log(trianAr.toFixed(2));
}
triangleAre("20", "30");
triangleAre("15", "35");
triangleAre("7.75", "8.45");
triangleAre("1.23456", "4.56789");