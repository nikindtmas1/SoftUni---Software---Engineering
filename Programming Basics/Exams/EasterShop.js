function easterShop(input) {
    let haveEggs = Number(input.shift());
    let currentEggs = haveEggs;
    let saleEggs = 0;

    let nexInput = input.shift();
    while (currentEggs >= 0 && nexInput != 'Close') {
        if (nexInput == 'Buy') {
            nexInput = Number(input.shift());
            if (currentEggs < nexInput) {
                break;
            }
            currentEggs -= nexInput;
            saleEggs += nexInput;
            nexInput = input.shift();
            if (nexInput == 'Close') {
                break;
            }
        } else if (nexInput == 'Fill') {
            nexInput = Number(input.shift());
            currentEggs += nexInput;
            nexInput = input.shift();
            if (nexInput == 'Close') {
                break;
            }
        }

    }
    if (currentEggs < nexInput) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${currentEggs}.`);
    }
    if (nexInput == 'Close') {
        console.log(`Store is closed!`);
        console.log(`${saleEggs} eggs sold.`);
    }
}
easterShop([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
  ])