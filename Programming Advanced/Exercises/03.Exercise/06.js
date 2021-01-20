function storeCatalogue(input) {

    let arrInput = [...input];
    let storeProd = {};


    for (let i = 0; i < arrInput.length; i++) {

        let productInfo = arrInput[i].split(' : ');

        [proName, price] = productInfo;

        let char = proName[0].toUpperCase();
        let uperLetter = capitalLetter(proName);
        price = Number(price);

        if (!storeProd[char]) {

            storeProd[char] = [];

        }

        storeProd[char].push({ uperLetter, price });
        storeProd[char].sort((a, b) => (a.uperLetter).localeCompare(b.uperLetter));

    }

    let entries = Object.entries(storeProd);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    let result = [];
    sorted.forEach(element => {
        let values = element[1]
            .sort((a, b) => (a.uperLetter).localeCompare(b.uperLetter))
            .map(product => `  ${product.uperLetter}: ${product.price}`)
            .join('\n');
        let string = `${element[0]}\n${values}`;

        result.push(string);
    });

    // 

    // for (const key in storeProd) {
    //    let value = storeProd[key].map(entry => `  ${entry.uperLetter}: ${entry.price}`);
    //    let string = `${key}\n${value.join('\n')}`;
    //    result.push(string);
    // }

    return result.join('\n');

    function capitalLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


}

console.log(storeCatalogue(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));
