function footbalResults(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let resultTeam1 = Number(firstMatch[0]);
    let resultTeam2 = Number(firstMatch[2]);

    let resultTeam1Match2 = Number(secondMatch[0]);
    let resultTeam2Match2 = Number(secondMatch[2]);

    let resultTeam1Match3 = Number(thirdMatch[0]);
    let resultTeam2Match3 = Number(thirdMatch[2]);

    let won = 0;
    let lost = 0;
    let drawngames = 0;

    if (resultTeam1 > resultTeam2) {
        won++;
    } else if (resultTeam1 < resultTeam2) {
        lost++;
    } else if (resultTeam1 == resultTeam2) {
        drawngames++;
    }
    if (resultTeam1Match2 > resultTeam2Match2) {
        won++;
    } else if (resultTeam1Match2 < resultTeam2Match2) {
        lost++;
    } else if (resultTeam1Match2 == resultTeam2Match2) {
        drawngames++;
    }
    if (resultTeam1Match3 > resultTeam2Match3) {
        won++;
    } else if (resultTeam1Match3 < resultTeam2Match3) {
        lost++;
    } else if (resultTeam1Match3 == resultTeam2Match3) {
        drawngames++;
    }
    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawngames}`);
}
footbalResults(['0:2', '0:1', '3:3']);