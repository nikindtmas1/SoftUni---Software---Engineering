function carFactory(input) {

    let request = { ...input };
    let result = {};

    let engine =
    {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    };

    // let carriage = ['hatchback', 'coupe'];

    let model = request.model;

    result['model'] = model;

    let requestPower = request.power;

    for (let key in engine) {

        if (requestPower <= engine[key].power) {

            let power = engine[key].power;
            let volume = engine[key].volume;

            result['engine'] = { power, volume };
            let carriage = request.carriage;
            let color = request.color;

            result['carriage'] = { type: carriage, color: color };

            let wheelsize = request.wheelsize;

            if (wheelsize % 2 == 0) {

                wheelsize -= 1;

            }

            result['wheelsize'] = [wheelsize, wheelsize, wheelsize, wheelsize];

            break;
        }
    }
    // console.log(engine[0].typeEngine.power);


    return result;

}

console.log(carFactory(
    { model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 }));
