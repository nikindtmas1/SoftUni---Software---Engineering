function easterDecoration(input) {
    let countCustomer = Number(input.shift());

    let countarPurchas = 0;
    let countarCustomers = 0;
    let purchasPrice = 0;
    let totalPurchasPrice = 0;
    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7.00;
    let purchase = input.shift();

    while (countarCustomers < countCustomer) {
        countarPurchas++;
        switch (purchase) {
            case 'basket': purchasPrice += basket; break;
            case 'wreath': purchasPrice += wreath; break;
            case 'chocolate bunny': purchasPrice += chocolateBunny; break;
        }

        purchase = input.shift();
        if (purchase == 'Finish') {

            if (countarPurchas % 2 == 0) {
                purchasPrice -= purchasPrice * 0.20;
            }
            totalPurchasPrice += purchasPrice;
            console.log(`You purchased ${countarPurchas} items for ${purchasPrice.toFixed(2)} leva.`);
            countarCustomers++;
            countarPurchas = 0;
            purchasPrice = 0;
            purchase = input.shift();
        }
    }
    let averagePrice = totalPurchasPrice / countCustomer;
    console.log(`Average bill per client is: ${averagePrice.toFixed(2)} leva.`);
}
easterDecoration([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ]);