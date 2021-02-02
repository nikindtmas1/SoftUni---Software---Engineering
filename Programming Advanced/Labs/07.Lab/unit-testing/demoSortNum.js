function sortNums(arr){
    arr.sort((a, b) => a - b);
}

let nums = [2, 4, 5, -2, 10];
sortNums(nums);
if(JSON.stringify(nums) === "[-2, 2, 4, 5, 10]"){

    console.error("They are equal!");
}