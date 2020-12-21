function sortByTwoCriteria(inputArr) {

    let ascendingArr = inputArr.sort();
    
    ascendingArr.sort((a, b) => a.length - b.length);

    for (const iterator of ascendingArr) {

        console.log(iterator + '');
    }

}

sortByTwoCriteria([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]);