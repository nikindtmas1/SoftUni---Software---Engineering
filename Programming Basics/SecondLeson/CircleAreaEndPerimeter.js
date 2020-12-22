function circleEndPerimeterArea([arg1]){
let r = Number(arg1);
let circleArea = Math.PI * r * r;
let perimeter = 2 * Math.PI * r;

console.log("Area = " + circleArea);
console.log("Perimeter " + perimeter);
}
circleEndPerimeterArea([10])

//More exercises

function circleEndPeri(arg1) {
    let r = Number(arg1);

    let circleAre = Math.PI * r * r;
    let perimet = 2 * Math.PI * r;

    console.log(circleAre.toFixed(2));
    console.log(perimet.toFixed(2));
}
circleEndPeri("3");
circleEndPeri("4.5");