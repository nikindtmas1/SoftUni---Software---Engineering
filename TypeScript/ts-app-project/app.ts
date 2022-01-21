function combine(
    input1: number | string, 
    input2: number | string,
    resultConvertion: string,
    ) {

    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){

        result = input1 + input2;

    }else{

       result = input1.toString() + input2.toString()
    }

    if(resultConvertion === 'as-number'){
        return +result;
    }else{

        return result.toString();
    }

};

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Niki', 'Vili', 'as-string');
console.log(combineNames);