function solve(arg1, arg2, arg3) {

let steps = Number(arg1);
let footprintMt = Number(arg2);
let speedKmh = Number(arg3);
let speedMsStr = (speedKmh * 5 / 18).toFixed(2);
let speedMs = Number(speedMsStr);

let length = steps * footprintMt;
let rest = Math.trunc(length / 500);

let timeSec = (length / speedMs) + (rest * 60);
let timeMin = timeSec / 60;
let hours = timeSec / 60 /60;



console.log(length);
console.log(rest);
console.log(timeSec);


}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
