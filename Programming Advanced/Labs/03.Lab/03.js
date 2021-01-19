function cityRecord(arg1, arg2, arg3) {

    let cityName = arg1;
    let population = Number(arg2);
    let treasury = Number(arg3);

    const city = {
        cityName,
        population,
        treasury,
        taxeRate: 10,
        collectTaxes(){this.treasury += this.population * this.taxeRate;},
        applyGrowth(percent){this.population += Math.floor(this.population * percent / 100);},
        applyRecession(percent){this.treasury -= Math.floor(this.treasury * percent / 100);}

    };

    return city;

}

const result = cityRecord('Tortuga',
7000,
15000);
console.log(result);

result.collectTaxes();
result.applyGrowth(10);
result.applyRecession(5)
console.log(result);
