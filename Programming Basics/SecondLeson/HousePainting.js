function housePainting([arg1,arg2,arg3]){
let x = parseFloat(arg1);
let y = parseFloat(arg2);
let h = parseFloat(arg3);

let frontBackWallArea = ((x*x) + (x*x - (1.2*2)));
let wallArea = (((x*y)*2) - ((1.5*1.5)*2));
let c = Math.sqrt((x/2)*(x/2) + h*h).toFixed(2);
let roofArea = ((x*h/2)*2 + (y*c)*2);

let redPaint = (roofArea /4.3).toFixed(2);
let greenPaint = ((frontBackWallArea + wallArea)/3.4).toFixed(2);

console.log(greenPaint);
console.log(redPaint);

}
housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);

//More exercises

function housePaint(arg1, arg2, arg3) {
    let x = Number(arg1);
    let y = Number(arg2);
    let h = Number(arg3);

    let sideWall = x * y;
    let windowArea = 1.5 * 1.5;
    let walls = (2 * sideWall) - (2 * windowArea);
    let backSide = x * x;
    let door = 1.2 * 2;
    let frontEndBackSide = (2 * backSide) - door;
    let totalFonadamen = walls + frontEndBackSide;
    let greenPain = totalFonadamen / 3.4;
    
    let roofSide = 2 * x * y;
    let frontBackroof = 2 * (x * h / 2);
    let roofAre = roofSide + frontBackroof;
    let redPain = roofAre / 4.3;

    console.log(greenPain.toFixed(2));
    console.log(redPain.toFixed(2));
}
housePaint("6", "10", "5.2");
housePaint("10.25", "15.45", "8.88");