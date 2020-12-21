function maxNumber(inputArray) {
    let n = inputArray.length;

    let maxNum = '';

    for (let index = 0; index < n; index++) {
        let element = inputArray[index];
        let isBigger = true;
        for (let i = index + 1; i < n; i++) {
            let nexElement = inputArray[i];
            if (element <= nexElement) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            maxNum += `${element} `;
        }
    }
    console.log(maxNum);

}