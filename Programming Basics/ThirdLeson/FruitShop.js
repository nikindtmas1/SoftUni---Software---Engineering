function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2.toLowerCase();
    let quantity = Number(arg3);

    let price = 0;

    if (day == 'saturday' || day == 'sunday') {
        if (fruit == 'banana') price = 2.70;
        else if (fruit == 'apple') price = 1.25;
        else if (fruit == 'orange') price = 0.90;
        else if (fruit == 'grapefruit') price = 1.60;
        else if (fruit == 'kiwi') price = 3.00;
        else if (fruit == 'pineapple') price = 5.60;
        else if (fruit == 'grapes') price = 4.20;
        else {
            console.log('error');
            return;
        }
    } else if (day == 'monday' || day == 'tuesday' || day == 'wednesday'
        || day == 'thursday' || day == 'friday') {
        if (fruit == 'banana') price = 2.50;
        else if (fruit == 'apple') price = 1.20;
        else if (fruit == 'orange') price = 0.85;
        else if (fruit == 'grapefruit') price = 1.45;
        else if (fruit == 'kiwi') price = 2.70;
        else if (fruit == 'pineapple') price = 5.50;
        else if (fruit == 'grapes') price = 3.85;
        else {
            console.log('error');
            return;
        }

    } else {
        console.log('error');
        return;
    }
    let sum = quantity * price;
    console.log(`${sum.toFixed(2)}`);
}     
fruitShop('grapes', 'May', '2.5');