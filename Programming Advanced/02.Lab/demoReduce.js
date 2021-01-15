let arr = [1, 2, 3, 4, 5, 8]

let resultReduce = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(resultReduce);

const numbersArr= [30, 50, 40, 10, 70];

const average =

numbersArr.reduce((total, number, index, array) => {

total += number;

if( index === array.length-1) {

return total/array.length;

} else { 

    return total; 
    
}

});

console.log(average)