function solve(arr) {

    let result = arr
        .map((x) => x.split(' | '))
        .reduce((storage, line) => {
            let [brand, model, quantity] = line;
            if (!storage[brand]) {
                storage[brand] = {};
            }

            if (!storage[brand][model]) {
                storage[brand][model] = 0;
            }
            
            storage[brand][model] += Number(quantity);

            return storage;
        }, {});

    let resultStr = [];

    let entries = Object.entries(result);

    for (let brand of entries) {
        let output = '';
        let brands = `${brand[0]}\n`;
        let models = Object.entries(brand[1]);

        models.forEach(element => {

            output += `###${element[0]} -> ${element[1]}\n`;

        });

        let final = brands + output;
        resultStr.push(final.trim());

    }
    return resultStr.join('\n');


}


console.log(solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
  ]));