function vacation(input) {
    let excursionPrice = Number(input.shift());
    let haveMoney = Number(input.shift());

    let countarSpendDays = 0;
    let countarDays = 0;

    while (haveMoney < excursionPrice && countarSpendDays < 5) {
        let spendOrSave = input.shift();
        let dayMoney = Number(input.shift());

        if (spendOrSave == 'save') {
            haveMoney += dayMoney;
            countarSpendDays = 0;
        }
        if (spendOrSave == 'spend') {
            haveMoney -= dayMoney;
            countarSpendDays++;
            if (haveMoney < 0) {
                haveMoney = 0;
            }
        }
        countarDays++;
    }
    if (countarSpendDays == 5) {
        console.log(`You can't save the money.`);
        console.log(`${countarDays}`);
    }
    if (haveMoney >= excursionPrice) {
        console.log(`You saved the money for ${countarDays} days.`);
    }
}
vacation([ '2000', '1000', 'spend', '1200', 'save', '2000' ]);