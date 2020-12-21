function solveAddOrSubtract(input){

    let inArr = input;
    let newArr = [];
    let sumOldArr = 0;
    let sumNewArr = 0;

    for(let index in inArr){
        let currentNum = inArr[index];
        sumOldArr += currentNum;

        if(currentNum % 2 == 0){
            newArr.push(currentNum + Number(index));
            sumNewArr += (currentNum + Number(index));
        }else{
            newArr.push(currentNum - Number(index));
            sumNewArr += (currentNum - Number(index));
        }
        
    }

    console.log(newArr);
    console.log(sumOldArr);
    console.log(sumNewArr);
}