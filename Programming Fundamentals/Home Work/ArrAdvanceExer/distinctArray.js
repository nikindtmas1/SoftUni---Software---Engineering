function distinctArray(inputArr) {

    for (let i = 0; i < inputArr.length; i++) {

        let n = inputArr[i];

        for (let j = i + 1; j < inputArr.length; j++) {

            let m = inputArr[j];

            if (n == m) {

                inputArr.splice(j, 1);
            }

        }
    }
    console.log(inputArr.join(' '));
}

distinctArray([
    20, 8, 12, 13,
     4, 4,  8,  5
  ]);