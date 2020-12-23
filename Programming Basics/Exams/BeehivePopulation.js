function beehivePopulation(arg1, arg2) {
    let startPopulation = Number(arg1);
    let age = Number(arg2);

    let newBee = 0;//(startPopulation / 10) * 2;
    let diedBee = 0;
    let sumBee = 0;//startPopulation + newBee;
    let currentPopulation = 0;

    for (let i = 1; i <= age; i++) {
        newBee = Math.floor(startPopulation / 10) * 2;
        sumBee = startPopulation + newBee;
        if (i % 5 == 0) {
            let migrationBee = Math.floor(sumBee / 50) * 5;
            sumBee -= migrationBee;
            //diedBee = (sumBee / 20) * 2;
            //currentPopulation = sumBee - diedBee;
            //startPopulation = currentPopulation;
        }
        diedBee = (Math.floor(sumBee / 20)) * 2;
        currentPopulation = sumBee - diedBee;
        startPopulation = (currentPopulation);
    }

    console.log(`Beehive population: ${currentPopulation}`);

}
beehivePopulation('1000', '23');