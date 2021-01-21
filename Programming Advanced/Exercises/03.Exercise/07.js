function townsToJSON(input) {

    let [colums, ...table] = input.map(splitInput);



    function splitInput(input) {
        return input.split('|').filter(isEmptyString).map(x => x.trim()).map(convertInNum)
    }

    function isEmptyString(x) {
        return x !== '';
    }

    function convertInNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }


    return JSON.stringify(table.map(entry => {
        return colums.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))
}

console.log(townsToJSON(
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));
