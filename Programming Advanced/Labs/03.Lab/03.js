function  cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRite: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRite;
        },

        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100);
        },

        applyRecession(percent){
            this.treasury -= Math.floor(this.treasury * percent / 100)
        },
    };

}

const city =
    cityTaxes('Tortuga',
    7000,
    15000);
    /*
    console.log(city);
    */
    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);