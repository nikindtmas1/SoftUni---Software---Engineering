function tournamentofChristmas(input) {
    let daysOfTur = Number(input.shift());

    let countarDaysTur = 0;
    let countarWinDay = 0;
    let countarWin = 0;
    let charityMoneyDay = 0;
    let charityMoney = 0;
    let countarLostDay = 0;
    let countarLost = 0;

    let sport = input.shift();
    let result = input.shift();
    while (countarDaysTur < daysOfTur) {
        while (sport != 'Finish') {
            if (result == 'win') {
                countarWinDay++;
                charityMoneyDay += 20;
            } else {
                countarLostDay++;
            }
            sport = input.shift();
            if (sport == 'Finish') {
                break;
            }
            result = input.shift();
        }
        if (countarWinDay > countarLostDay) {
            charityMoneyDay += charityMoneyDay * 0.10;
            charityMoney += charityMoneyDay;
            countarWin++;
            countarDaysTur++;
            countarWinDay = 0;
            countarLostDay = 0;
            charityMoneyDay = 0;
            sport = input.shift();
            result = input.shift();
        } else {
            countarLost++;
            countarDaysTur++;
            charityMoney += charityMoneyDay;
            charityMoneyDay = 0;
            countarWinDay = 0;
            countarLostDay = 0;
            sport = input.shift();
            result = input.shift();
        }

    }
    if (countarWin > countarLost) {
        charityMoney += charityMoney * 0.20;
        console.log(`You won the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    } else if (countarLost > countarWin) {
        console.log(`You lost the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    }
}
tournamentofChristmas([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]
  );