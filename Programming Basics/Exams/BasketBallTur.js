function basketBallTur(input) {
    let nameTur = input.shift();
    let numGame = Number(input.shift());

    let teamDesyPoints = Number(input.shift());
    let opositTeamPoints = Number(input.shift());

    let countarGame = 0;
    let countarGameWins = 0;
    let countarGameLoses = 0;
    let pointsWin = 0;
    let pointsLost = 0;
    let countarTotalWin = 0;
    let countarTotalLost = 0;
    let countarTotalGames = 0;

    while (nameTur != 'End of tournaments') {
        while (countarGame < numGame) {
            if (teamDesyPoints > opositTeamPoints) {
                countarGame++;
                countarTotalGames++;
                countarGameWins++;
                countarTotalWin++;

                pointsWin = teamDesyPoints - opositTeamPoints;
                console.log(`Game ${countarGame} of tournament ${nameTur}: win with ${pointsWin} points.`);

                if (countarGame < numGame) {
                    teamDesyPoints = Number(input.shift());
                    opositTeamPoints = Number(input.shift());
                } else {
                    break;
                }
            } else {
                countarGame++;
                countarTotalGames++;
                countarGameLoses++;
                countarTotalLost++;

                pointsLost = opositTeamPoints - teamDesyPoints;
                console.log(`Game ${countarGame} of tournament ${nameTur}: lost with ${pointsLost} points.`);

                if (countarGame < numGame) {
                    teamDesyPoints = Number(input.shift());
                    opositTeamPoints = Number(input.shift());
                } else {
                    break;
                }
            }

        }
        countarGame = 0;
        countarGameWins = 0;
        countarGameLoses = 0;

        nameTur = input.shift();
        numGame = Number(input.shift());

        teamDesyPoints = Number(input.shift());
        opositTeamPoints = Number(input.shift());
    }
    let procentWin = ((countarTotalWin / countarTotalGames) * 100).toFixed(2);
    let procentLosts = ((countarTotalLost / countarTotalGames) * 100).toFixed(2);

    console.log(`${procentWin}% matches win`);
    console.log(`${procentLosts}% matches lost`);
}
basketBallTur([
    'Dunkers',            '2',
    '75',                 '65',
    '56',                 '73',
    'Fire Girls',         '3',
    '67',                 '34',
    '83',                 '98',
    '66',                 '45',
    'End of tournaments', ''
  ]);