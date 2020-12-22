function aquarium(arg1,arg2,arg3,arg4){
let l = Number(arg1);
let w = Number(arg2);
let h = Number(arg3);
let procent = Number(arg4);
procent = procent * 0.01;

let size = l * w * h;
let totalwater = size * 0.001;
let result = totalwater - totalwater * procent;
console.log(result.toFixed(3));
}
aquarium("85","75", "47", "17");