function mergeArrays(arr1, arr2){
    let numbersArr = arr1.length;
    let countar = 0;
    let arr3 = [];
    let index1 = 0;
    let index2 = 0;
    let num1 = arr1[index1];
    let num2 = arr2[index2];
    while(countar < numbersArr){
        if(index1 % 2 == 0){
            if(countar < numbersArr - 1){
            arr3 += Number(num1) + Number(num2) + ' - ';
            }else{
                arr3 += Number(num1) + Number(num2);
            }
            countar++;
            index1++;
            index2++;
            num1 = arr1[index1];
            num2 = arr2[index2];
        }else{
            if(countar < numbersArr - 1){
            arr3 += (num1 + num2) + ' - ';
            }else{
                arr3 += (num1 + num2);
            }
            countar++;
            index1++;
            index2++;
            num1 = arr1[index1];
            num2 = arr2[index2];
        }
    }

    console.log(arr3);
   
}