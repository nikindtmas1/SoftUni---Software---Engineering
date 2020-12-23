function sumNumber(args){
    let n = Number(args[0]);
    let sum = 0;
    for (let i=1; i<=n; i++){
    let currentNumber = Number(args[i]);
    sum += currentNumber;
    }
    console.log(sum);
}
sumNumber(["5", "10", "20", "30", "40", "-10"]);
//
function traningSum(args){
    let n = Number(args[0]);
    let sum = 0;
    for(let i=1; i<=n; i++){
        let currentNum = Number(args[i]);
        sum += currentNum;
    }
    console.log(sum);
}
//
function nexSum(args){
    let n = Number(args[0]);
    let sum = 0;
    for (let i=1; i<=n; i++){
        let currentNum = Number(args[i]);
        sum += currentNum;
    }
    console.log(sum);
}
