function solveTaskThree(input) {

    let listOwnedCards = input.shift().split(', ');
    let numberOfCommands = Number(input.shift());

    let commands = input.shift();
    let countCommands = 0;

    while (countCommands < numberOfCommands) {

        countCommands++;

        commands = commands.split(', ');

        [command, item1, item2] = commands;

        if (command == 'Add') {

            let cardName = item1;

            if (listOwnedCards.includes(cardName)) {

                console.log(`Card is already bought`);

            } else {

                console.log(`Card successfully bought`);

                listOwnedCards.push(cardName);

            }

        } else if (command == 'Remove') {

            let cardName = item1;

            if (listOwnedCards.includes(cardName)) {

                let index = listOwnedCards.indexOf(cardName);

                console.log(`Card successfully sold`);

                listOwnedCards.splice(index, 1);

            } else {

                console.log(`Card not found`);

            }
        } else if (command == 'Remove At') {

            let index = Number(item1);

            if (index >= 0 && index <= listOwnedCards.length - 1) {

                listOwnedCards.splice(index, 1);

                console.log(`Card successfully sold`);

            } else {

                console.log(`Index out of range`);

            }
        } else if (command == 'Insert') {

            let index = Number(item1);
            let cardName = item2;

            if (index >= 0 && index <= listOwnedCards.length - 1) {

                if (listOwnedCards.includes(cardName)) {

                    console.log(`Card is already bought`);

                } else {

                    listOwnedCards.splice(index, 0, cardName);

                    console.log(`Card successfully bought`);

                }
            } else {

                console.log(`Index out of range`);

            }
        }

        commands = input.shift();
    }

    console.log(listOwnedCards.join(', '));

}
solveTaskThree([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Remove, SU-100Y',
    'Remove, T-34-85',
    'Remove, STG'
  ]);