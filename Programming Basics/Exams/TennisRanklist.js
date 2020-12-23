function tennisRanklist(input) {
    let countTurnament = Number(input.shift());
    let startPoints = Number(input.shift());

    let pointsW = 2000;
    let pointsF = 1200;
    let pointsSF = 720;

    let totalPoints = 0;
    let countarWin = 0;
    let countarTurnament = 0;
    let isFine = false;

    let nexTurnament = input.shift();
    while (countarTurnament <= countTurnament) {
        if (countarTurnament == countTurnament) {
            isFine = true;
            break;
        }
        if (nexTurnament == 'W') {
            totalPoints += pointsW;
            countarWin++;
            countarTurnament++;
        } else if (nexTurnament == 'F') {
            totalPoints += pointsF;
            countarTurnament++;
        } else if (nexTurnament == 'SF') {
            countarTurnament++;
            totalPoints += pointsSF;
        }
        nexTurnament = input.shift();
    }
    let finalPoints = startPoints + totalPoints;
    let averagePoints = Math.floor(totalPoints / countarTurnament);
    let winPro = (countarWin / countTurnament) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPro.toFixed(2)}%`);
}
tennisRanklist([
    '7', '1200', 'SF',
    'F', 'W',    'F',
    'W', 'SF',   'W'
  ]);