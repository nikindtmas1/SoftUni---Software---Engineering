let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

           arr.forEach(printRow);

function printRow(row){

console.log(row);

row.forEach(printNumber);

}

function printNumber(num){

console.log(num);

};

function diagonalSums(input) {

    let firstDiagonal = 0;
    
    let secondDiagonal = 0;
    
    let firstIndex = 0;
    
    let secondIndex = input[0].length - 1;
    
    input.forEach(array => {
    
    firstDiagonal += array[firstIndex++];
    
    secondDiagonal += array[secondIndex--];
    
    });
    
    console.log(firstDiagonal + ' ' + secondDiagonal);
    
    }