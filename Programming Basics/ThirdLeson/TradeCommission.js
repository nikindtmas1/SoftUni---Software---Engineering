function tradeCommission(arg1, arg2) {
    let town = arg1.toLowerCase();
    let sales = Number(arg2);

    let commission = 0;

    if (town == 'sofia') {
        if (sales <= 500 && sales >= 0) commission = 0.05;
        else if (sales <= 1000 && sales > 500) commission = 0.07;
        else if (sales <= 10000 && sales > 1000) commission = 0.08;
        else if (sales > 10000) commission = 0.12;
        else {
            console.log('error');
            return;
        }

    } else if (town == 'varna') {
        if (sales <= 500 && sales >= 0) commission = 0.045;
        else if (sales <= 1000 && sales > 500) commission = 0.075;
        else if (sales <= 10000 && sales > 1000) commission = 0.10;
        else if (sales > 10000) commission = 0.13;
        else {
            console.log('error');
            return;
        }

    } else if (town == 'plovdiv') {
        if (sales <= 500 && sales >= 0) commission = 0.055;
        else if (sales <= 1000 && sales > 500) commission = 0.08;
        else if (sales <= 10000 && sales > 1000) commission = 0.12;
        else if (sales > 10000) commission = 0.145;
        else {
            console.log('error');
            return;
        }

    } else {
        console.log('error');
        return;
    }

    let result = sales * commission;
    console.log(`${result.toFixed(2)}`);
}
tradeCommission('Vidin', '50');