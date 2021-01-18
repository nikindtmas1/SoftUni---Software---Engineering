function townPopulation(input) {

    let arr = input.slice();

    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        let currDate = arr[i];

        [townName, population] = currDate.split(' <-> ');
        population = Number(population);

        if (obj[townName] != undefined) {

            population += obj[townName];

            obj[townName] = population;

        } else {

            obj[townName] = population;

        }

    }

    for (const town in obj) {

        console.log(`${town} : ${obj[town]}`);

    }

}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Las Vegas <-> 100']);
