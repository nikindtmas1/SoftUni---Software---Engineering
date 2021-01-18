function listOfNames(input) {

    let arrCoppy = input.slice();

    let sortedArr = arrCoppy.sort((a, b) => a.localeCompare(b));

    let curratEl = 0;

    for (let i = 0; i < sortedArr.length; i++) {

        curratEl = i + 1;


        console.log(`${curratEl}.${sortedArr[i]}`);

    }

}

listOfNames(['John',
    'Bob',
    'Christina'
,'Ema']);