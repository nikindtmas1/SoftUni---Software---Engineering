function smallshop(arg1, arg2, arg3) {
    let product = arg1.toLowerCase();
    let town = arg2.toLowerCase();
    let quantity = Number(arg3);

    let price = 0.0;

    if (town == 'sofia') {
        switch (product) {
            case 'coffee': price = 0.50; break;
            case 'water': price = 0.80; break;
            case 'beer': price = 1.20; break;
            case 'sweets': price = 1.45; break;
            case 'peanuts': price = 1.60; break;
        }
    } else if (town == 'plovdiv') {
        switch (product) {
            case 'coffee': price = 0.40; break;
            case 'water': price = 0.70; break;
            case 'beer': price = 1.15; break;
            case 'sweets': price = 1.30; break;
            case 'peanuts': price = 1.50; break;
        }
    } else if (town == 'varna') {
        switch (product) {
            case 'coffee': price = 0.45; break;
            case 'water': price = 0.70; break;
            case 'beer': price = 1.10; break;
            case 'sweets': price = 1.35; break;
            case 'peanuts': price = 1.55; break;
        }
    }
    let result = quantity * price;
    console.log(result);


}
smallshop('beer', 'Sofia', '6');