function solveMultiplication(arg){

    let num = arg;
    let startMultipli = 1;
    let endMultipli = 10;

for(let i = startMultipli; i <= endMultipli; i++){

    let product = num * i;

    console.log(`${num} X ${i} = ${product}`);
}


}