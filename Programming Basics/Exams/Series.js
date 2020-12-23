function series(input) {
    let budget = Number(input.shift());
    let countSeries = Number(input.shift());

    let countarSeries = 0;
    let finalPrice = 0;
    let totalPrice = 0;

    while (countarSeries < countSeries) {
        let nameSeries = input.shift();
        let priceSeries = Number(input.shift());
        countarSeries++;
        switch (nameSeries) {
            case 'Thrones': finalPrice = priceSeries - (priceSeries * 0.50); totalPrice += finalPrice; break;
            case 'Lucifer': finalPrice = priceSeries - (priceSeries * 0.40); totalPrice += finalPrice; break;
            case 'Protector': finalPrice = priceSeries - (priceSeries * 0.30); totalPrice += finalPrice; break;
            case 'TotalDrama': finalPrice = priceSeries - (priceSeries * 0.20); totalPrice += finalPrice; break;
            case 'Area': finalPrice = priceSeries - (priceSeries * 0.10); totalPrice += finalPrice; break;
            default: finalPrice = priceSeries; totalPrice += finalPrice; break;
        }

    }
    let leftMoney = Math.abs(budget - totalPrice);
    if (totalPrice <= budget) {
        console.log(`You bought all the series and left with ${leftMoney.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${leftMoney.toFixed(2)} lv. more to buy the series!`);
    }
}
series([ '50', '2', 'Lord of the rings', '40', 'Gotham', '10' ]);