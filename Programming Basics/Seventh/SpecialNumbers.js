function specialNumbers(input) {
    let n = Number(input.shift());

    let output = '';
    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 1; d2 <= 9; d2++) {
            for (let d3 = 1; d3 <= 9; d3++) {
                for (let d4 = 1; d4 <= 9; d4++) {
                    let firsthMedgicNum = n % d1 == 0;
                    let secondMedgicNum = n % d2 == 0;
                    let thirdMedficNum = n % d3 == 0;
                    let fourthMedgicNum = n % d4 == 0;
                    if (firsthMedgicNum && secondMedgicNum && thirdMedficNum && fourthMedgicNum) {
                        output += (`${d1}${d2}${d3}${d4} `);
                    }
                }
            }
        }
    }
    console.log(output);
}
specialNumbers([ '3' ]);