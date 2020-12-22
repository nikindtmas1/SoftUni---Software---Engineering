function flowerShop(arg1, arg2, arg3, arg4, arg5) {
    let magnolias = Number(arg1);  // бр - магнолии 3.25 лв
    let hyacinth = Number(arg2);   // бр - зюмбюли 4 лв
    let roses = Number(arg3);      // бр -  рози 3.50 лв
    let cactus = Number(arg4);     // бр -  кактос 8 лв
    let priceGift = Number(arg5);  //лева

    let orderRevenue = magnolias * 3.25 + hyacinth * 4 + roses * 3.50 + cactus * 8;
    let revenuAfterTaxes = orderRevenue - (orderRevenue * 0.05);

    if (revenuAfterTaxes >= priceGift) {

        let leftMoney = revenuAfterTaxes - priceGift;
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);

    } else {

        let neededMoney = priceGift - revenuAfterTaxes;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }

}
flowerShop('2','3','5','1','50');
//flowerShop('15','7','5','10','100');