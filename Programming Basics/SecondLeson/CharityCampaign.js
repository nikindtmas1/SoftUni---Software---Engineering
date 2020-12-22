function charity(arg1, arg2, arg3, arg4, arg5) {
    let days = Number(arg1);
    let chefs = Number(arg2);
    let cakes = Number(arg3);
    let corrugations = Number(arg4);
    let pancakes = Number(arg5);
    let cakesPrice = 45;
    let corrugationsPrice = 5.80;
    let pancakesPrice = 3.20;

    let dayRevenu = ((cakes * cakesPrice) + (corrugations * corrugationsPrice) + (pancakes * pancakesPrice)) * chefs;
    let allCampanie = dayRevenu * days;
    let revenu = allCampanie - (1 / 8 * allCampanie);
    console.log(revenu.toFixed(2));
}
charity("20", "8", "14", "30", "16");