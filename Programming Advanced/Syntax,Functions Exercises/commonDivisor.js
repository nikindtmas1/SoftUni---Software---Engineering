function solveDevision(num1, num2){

let a = num1;
let b = num2;

while (b != 0){

    let temp = b;
     b = a % b;
     a = temp;
}

return a;

}

console.log(solveDevision(15, 5));
console.log(solveDevision(2154, 458));