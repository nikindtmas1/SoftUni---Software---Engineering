function storeProvision(inputArrFirst, inputArrSecond) {

    let inputArr1 = inputArrFirst.slice();
    let inputArr2 = inputArrSecond.slice();

    let objOutput = {};

    let name = '';
    let quantity2 = 0;

    for (let i = 0; i < inputArr2.length; i++) {

        if (i % 2 == 0) {

            name = inputArr2[i];
            quantity2 = Number(inputArr2[i + 1]);

            if (inputArr1.includes(name)) {

                let index1 = Number(inputArr1.indexOf(name));
                let quantity1 = Number(inputArr1[index1 + 1]);

                sumQuantity = quantity1 + quantity2;

                inputArr1.splice(index1 + 1, 1, sumQuantity + '');

            } else {

                inputArr1.push(name);
                inputArr1.push(quantity2 + '');
            }

        }
    }

    for (let i = 0; i < inputArr1.length; i++) {

        if (i % 2 == 0) {

            let product = inputArr1[i];
            let quantityPro = Number(inputArr1[i + 1]);

            objOutput[product] = quantityPro;
        }
    };

    for (const key in objOutput) {

        console.log(`${key} -> ${objOutput[key]}`);
    }

}

storeProvision([
    'Chips',    '5',
    'CocaCola', '9',
    'Bananas',  '14',
    'Pasta',    '4',
    'Beer',     '2'
  ], [
    'Flour',    '44',
    'Oil',      '12',
    'Pasta',    '7',
    'Tomatoes', '70',
    'Bananas',  '30'
  ]);