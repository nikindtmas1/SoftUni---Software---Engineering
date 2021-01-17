function sortByTwoCriteria(input) {

    let arrCoppy = input.slice();

    let sortedArr = arrCoppy.sort((a, b) => {

        if (a.length !== b.length) {

            return a.length - b.length;

        } else {

            return a.localeCompare(b);

        }
    });

    sortedArr.forEach(element => {

        console.log(element);

    });
}

sortByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']);