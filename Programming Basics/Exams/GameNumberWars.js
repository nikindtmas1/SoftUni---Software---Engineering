function gameNumWars(input) {
    let nameFirst = input.shift();
    let nameSecond = input.shift();

    let pointFirstName = 0;
    let pointSecondName = 0;
    let isFine = false;

    let nexInput = input.shift();
    while (nexInput != 'End of game') {
        numNameFirst = Number(nexInput);
        numNameSecond = Number(input.shift());


        if (numNameFirst > numNameSecond) {
            pointFirstName += numNameFirst - numNameSecond;
        } else if (numNameSecond > numNameFirst) {
            pointSecondName += numNameSecond - numNameFirst;
        } else if (numNameFirst == numNameSecond) {
            console.log(`Number wars!`);
            numNameFirst = Number(input.shift());
            numNameSecond = Number(input.shift());
            if (numNameFirst > numNameSecond) {
                console.log(`${nameFirst} is winner with ${pointFirstName} points`);
                isFine = true;
                break;
            } else if (numNameSecond > numNameFirst) {
                console.log(`${nameSecond} is winner with ${pointSecondName} points`);
                isFine = true;
                break;
            }
        }
        if (isFine == true) {
            break;
        }
        nexInput = input.shift();
    }
    if (isFine == false) {
        console.log(`${nameFirst} has ${pointFirstName} points`);
        console.log(`${nameSecond} has ${pointSecondName} points`);
    }
}
gameNumWars([
    'Aleks', 'Georgi', '4',
    '5',     '3',      '2',
    '4',     '3',      '4',
    '4',     '5',      '2',
    '',      '',       ''
  ]);