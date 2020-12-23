function travelling(input) {
    let destination = input.shift();
    let minBudget = Number(input.shift());
    let saveMoney = 0;

    while (destination != 'End') {
        let nexMoney = Number(input.shift());
        saveMoney += nexMoney;
        if (saveMoney >= minBudget) {
            console.log(`Going to ${destination}!`);
            saveMoney = 0;
            destination = input.shift();
            minBudget = Number(input.shift());
        }
    }

}
travelling([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   ''
  ]);