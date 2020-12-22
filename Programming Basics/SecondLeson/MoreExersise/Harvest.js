function harvestWine(arg1, arg2, arg3, arg4) {
    let wineM3 = Number(arg1);
    let grapes = Number(arg2);
    let wineLitersNeed = Number(arg3);
    let employees = Number(arg4);

    let harvest = wineM3 * grapes;
    let wineHarvest = harvest * 0.4;
    let wineLiters = wineHarvest / 2.5;

    if (wineLiters < wineLitersNeed) {

        let notEnough = wineLitersNeed - wineLiters;
        console.log(`It will be a tough winter! More ${Math.floor(notEnough)} liters wine needed.`);

    } else {

        let moreWineLiters = wineLiters - wineLitersNeed;
        let wineEmployees = moreWineLiters / employees;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(moreWineLiters)} liters left -> ${Math.ceil(wineEmployees)} liters per person.`);

    }
}
harvestWine('1020', '1.5', '425', '4');