
function reducer(arr, func){

    let result = arr[0];

    for(let nexElement of arr.slice(1))
    
    result = func(result, nexElement);

    return result;
};

reducer([5, 10, 20], (a, b) => a + b);