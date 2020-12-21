function solveRounding(arg1, arg2){

    let number = arg1;
    let precision = arg2;

    if(precision > 15){
        precision = 15;
    }

    let result = number.toFixed(precision);
    let output = '';

    for(let i = 0; i < result.length; i++){

        if(Number(result[i]) != 0){

            output += result[i];
        }

    }
    console.log(output);
}