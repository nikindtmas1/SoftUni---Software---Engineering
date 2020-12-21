function cardGame(inputArr) {

    let typeCards = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let powerCards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let pleyars = {};

    inputArr.forEach(line => {

        [personName, cardsHave] = line.split(': ');

        cardsHave = cardsHave.split(', ');

        if (!pleyars.hasOwnProperty(personName)) {

            pleyars[personName] = [];

        }

        pleyars[personName].push(...cardsHave);
    });

    for (let key in pleyars) {

        let cardArr = new Set(pleyars[key]);
        let total = 0;

        Array.from(cardArr).forEach(card => {

            let elements = card.split('');
            let type = elements.pop();
            let cardNum = elements.join('');

            if (isNaN(cardNum)) {

                cardNum = powerCards[cardNum];

            }

            total += typeCards[type] * Number(cardNum);

        });

        pleyars[key] = total;
    }

    for (const key in pleyars) {

        console.log(`${key}: ${pleyars[key]}`);

    }
}

cardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
  ]);