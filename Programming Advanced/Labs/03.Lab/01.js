function cityRecord(arg1, arg2, arg3) {

    let cityName = arg1;
    let population = Number(arg2);
    let treasury = Number(arg3);

    let obj = {};

    obj.name = cityName;
    obj.population = population;
    obj.treasury = treasury;

    return obj;

}

console.log(cityRecord('Tortuga',
7000,
15000));
