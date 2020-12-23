function honeyHarvest(arg1, arg2, arg3) {
    let tipeFlower = arg1;
    let countFlowers = Number(arg2);
    let season = arg3;

    let currentHoneyHarvest = 0;
    let finalHoneyHarvest = 0;
    if (season == 'Spring') {
        switch (tipeFlower) {
            case 'Sunflower': currentHoneyHarvest = countFlowers * 10; finalHoneyHarvest += currentHoneyHarvest; break;
            case 'Daisy': currentHoneyHarvest = countFlowers * 12; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;
            case 'Lavender': currentHoneyHarvest = countFlowers * 12; finalHoneyHarvest += currentHoneyHarvest; break;
            case 'Mint': currentHoneyHarvest = countFlowers * 10; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;

        }
    } else if (season == 'Summer') {
        switch (tipeFlower) {
            case 'Sunflower': currentHoneyHarvest = countFlowers * 8; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;
            case 'Daisy': currentHoneyHarvest = countFlowers * 8; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;
            case 'Lavender': currentHoneyHarvest = countFlowers * 8; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;
            case 'Mint': currentHoneyHarvest = countFlowers * 12; finalHoneyHarvest += currentHoneyHarvest * 1.1; break;

        }
    } else if (season == 'Autumn') {
        switch (tipeFlower) {
            case 'Sunflower': currentHoneyHarvest = countFlowers * 12; finalHoneyHarvest += currentHoneyHarvest * 0.95; break;
            case 'Daisy': currentHoneyHarvest = countFlowers * 6; finalHoneyHarvest += currentHoneyHarvest * 0.95; break;
            case 'Lavender': currentHoneyHarvest = countFlowers * 6; finalHoneyHarvest += currentHoneyHarvest * 0.95; break;
            case 'Mint': currentHoneyHarvest = countFlowers * 6; finalHoneyHarvest += currentHoneyHarvest * 0.95; break;

        }
    }
    console.log(`Total honey harvested: ${finalHoneyHarvest.toFixed(2)}`);
}
honeyHarvest('Daisy' ,'15' ,'Spring');