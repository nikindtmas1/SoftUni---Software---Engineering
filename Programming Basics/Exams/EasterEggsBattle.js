function easterEggsBattle(input) {
    let countEggsFirst = Number(input.shift());
    let countEggsSecond = Number(input.shift());


    let currentCountFirst = countEggsFirst;
    let currentCountSecond = countEggsSecond;
    let winer = input.shift();
    while (winer != 'End of battle') {
        if (currentCountFirst == 0) {
            console.log(`Player one is out of eggs. Player two has ${currentCountSecond} eggs left.`);
            break;
        } else if (currentCountSecond == 0) {
            console.log(`Player two is out of eggs. Player one has ${currentCountFirst} eggs left.`);
            break;
        }

        switch (winer) {
            case 'one': currentCountSecond--; break;
            case 'two': currentCountFirst--; break;
        }
        winer = input.shift();
    }
    if (winer == 'End of battle') {
        console.log(`Player one has ${currentCountFirst} eggs left.`);
        console.log(`Player two has ${currentCountSecond} eggs left.`);
    }
}
easterEggsBattle([
    '6',   '3',   'one',
    'two', 'two', 'one',
    'one', '',    '',
    '',    ''
  ]);