function easterLunch(input) {
    let countEasterCake = Number(input.shift());
    let countEggShell = Number(input.shift());
    let kiloCookies = Number(input.shift());

    let priceEasterCake = 3.20;
    let priceEggShell = 4.35;//for 12 eggs
    let priceCookies = 5.40;// for kilo
    let pricePaint = 0.15; // for 1 egg

    let easterCakeSum = priceEasterCake * countEasterCake;
    let eggShellSum = priceEggShell * countEggShell;
    let eggsPaitSum = countEggShell * 12 * pricePaint;
    let cookiesSum = priceCookies * kiloCookies;

    let totalSum = easterCakeSum + eggShellSum + eggsPaitSum + cookiesSum;

    console.log(`${totalSum.toFixed(2)}`);


}
easterLunch([ '2', '3', '2', '' ]);