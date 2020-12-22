function trapezoidArea([arg1, arg2, arg3]){
let b1 = parseFloat(arg1);
let b2 = parseFloat(arg2);
let h = parseFloat(arg3);
let area = (b1 + b2) * h / 2;

console.log("Trapezoid area = " + area);
}
trapezoidArea([3, 4, 5]);
//
function trapezoidAreaNex([arg1, arg2, arg3]){
    let a1 = parseFloat(arg1);
    let a2 = parseFloat(arg2);
    let h = parseFloat(arg3);

    console.log(`Trapezoid area = ${(a1 + a2) * h / 2}`);
}
trapezoidAreaNex([3, 4, 5]);
//
function number1To10(){
for(i = 1; i <= 10; i++){
    console.log(i);
}
}
number1To10();
// More exercises
function trapezoidAr(arg1,arg2,arg3){
let b1 = Number(arg1);
let b2 = Number(arg2);
let h = Number(arg3);

let trapdAr = (b1 + b2) * h/2;
console.log(trapdAr.toFixed(2));
}
trapezoidAr("8", "13", "7");