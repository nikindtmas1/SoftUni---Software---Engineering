function demoCardGame(inputArr){

    const powerCards = {
        'J': 11, 
        'Q': 12, 
        'K': 13, 
        'A': 14
    };

    const typeCards = {
        'S': 4, 
        'H': 3, 
        'D': 2, 
        'C': 1
    };

    let pleyars = {};

    for (const line of inputArr) {

        [pleyarName, cardsHave] = line.split(': ');

        cardsHave = cardsHave.split(', ');

        if(!pleyars.hasOwnProperty(pleyarName)){

            pleyars[pleyarName] = [];

        }
        
        pleyars[pleyarName].push(...cardsHave);
    }

    for (const key in pleyars) {

        let cardArr = new Set(pleyars[key]);
        let total = 0;

        Array.from(cardArr).forEach(card => {

            let detils = card.split('');
            let type = detils.pop();
            let cardName = detils.join('');

            if(isNaN(cardName)){

                cardName = powerCards[cardName];

            }

            total += typeCards[type] * Number(cardName);

        });

        pleyars[key] = total;

    }
    
    console.log(pleyars);
}

demoCardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
  ]);