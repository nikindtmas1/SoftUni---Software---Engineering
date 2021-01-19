function calorieObject(input) {

    let arrInput = input.slice();

    let output = {};

    for (let i = 0; i < arrInput.length; i += 2) {

        let key = arrInput[i];
        let value = Number(arrInput[i + 1]);

        output[key] = value;

    }

    console.log(output);

}

calorieObject([
    'Potato',   '93',
    'Skyr',     '63',
    'Cucumber', '18',
    'Milk',     '42'
  ]);
