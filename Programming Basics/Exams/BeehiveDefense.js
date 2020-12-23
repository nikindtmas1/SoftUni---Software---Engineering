function beehiveDefense(arg1, arg2, arg3) {
    let countBee = Number(arg1);
    let healthBear = Number(arg2);
    let atacBear = Number(arg3);

    let currentBee = 0;
    let currentHealthBear = 0;
    while (countBee >= 100 && healthBear > 0) {
        currentBee = countBee - atacBear;
        currentHealthBear = healthBear - (currentBee * 5);
        countBee = currentBee;
        healthBear = currentHealthBear;
    }
    if (healthBear <= 0) {
        console.log(`Beehive won! Bees left ${currentBee}.`);
    }
    if (countBee < 100 && countBee > 0) {
        console.log(`The bear stole the honey! Bees left ${currentBee}.`);
    } else if (countBee <= 0) {
        countBee = 0;
        console.log(`The bear stole the honey! Bees left ${countBee}.`);

    }

}
beehiveDefense('200', '10000', '90');