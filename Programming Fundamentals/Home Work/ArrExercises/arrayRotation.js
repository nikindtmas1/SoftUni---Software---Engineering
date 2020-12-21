function arrayRotation(inputArr, n) {
    let i = 0;
    let output = '';
    while (i < n) {
        let num = Number(inputArr.shift());
        inputArr.push(num);
        i++;
    }
    for (let i = 0; i < inputArr.length; i++) {
        output += `${inputArr[i]} `;
    }
    console.log(output);
}