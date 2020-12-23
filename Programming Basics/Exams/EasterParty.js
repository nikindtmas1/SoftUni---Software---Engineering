function easterPrty(input) {
    let countPeople = Number(input.shift());
    let priceTicket = Number(input.shift());
    let budgetDesi = Number(input.shift());

    let cakePrice = budgetDesi * 0.10;
    let discountPrice = 0;

    if (countPeople < 10) {
        discountPrice = priceTicket;
    }
    if (countPeople >= 10 && countPeople <= 15) {
        discountPrice = priceTicket - (priceTicket * 0.15);
    }
    if (countPeople > 15 && countPeople <= 20) {
        discountPrice = priceTicket - (priceTicket * 0.20);
    }
    if (countPeople > 20) {
        discountPrice = priceTicket - (priceTicket * 0.25);
    }

    let sumParty = (countPeople * discountPrice) + cakePrice;
    let leftMoney = Math.abs(budgetDesi - sumParty);
    if (budgetDesi >= sumParty) {
        console.log(`It is party time! ${leftMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${leftMoney.toFixed(2)} leva needed.`);
    }
}
easterPrty([ '24', '35', '550', '', '' ]);