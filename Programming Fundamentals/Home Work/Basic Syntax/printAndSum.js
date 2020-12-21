function solveNumbesAndSum(arg1, arg2){

    let start = arg1;
    let end = arg2;
    let output = '';
    let sum = 0;

    for(let i = start; i <= end; i++){

        sum += i;
        output += `${i} `;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}