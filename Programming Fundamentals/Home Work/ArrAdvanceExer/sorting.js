function sorting(inputArr) {

    let coppyArr = [];
    let finalArr = [];

    for (const iterator of inputArr) {

        coppyArr.push(iterator);
    }

    let ascendingArr = coppyArr.sort((a, b) => a - b);

    let length = ascendingArr.length;

    let index = 0;

    while (index < length) {

        let num1 = ascendingArr.pop();
        index++;

        let num2 = ascendingArr.shift();
        index++;

        finalArr.push(num1);
        
        finalArr.push(num2);
    }

    console.log(finalArr.join(' '));

}

sorting([
    1, 21, 3, 52, 69,
   63, 31, 2, 18, 94
 ]);