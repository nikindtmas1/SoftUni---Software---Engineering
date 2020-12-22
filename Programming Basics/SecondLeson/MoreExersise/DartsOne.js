function darts(input) {
    let playerName = input.shift();
    let typePoints = input.shift();
    let pointsShot = Number(input.shift());

    let points = 301;
    let counterShot = 0;
    let counterUnseccesShot = 0;
    let sumPoints = 0;

    while (typePoints != 'Retire') {
        switch (typePoints) {
            case 'Triple': sumPoints = pointsShot * 3; break;
            case 'Double': sumPoints = pointsShot * 2; break;
            case 'Single': sumPoints = pointsShot; break;

        }
        if (points >= sumPoints) {
            points -= sumPoints;
            counterShot++;
        } else if (sumPoints > points) {
            counterUnseccesShot++;
        }
        if (points == 0) {
            console.log(`${playerName} won the leg with ${counterShot} shots.`);
            break;
        }
        typePoints = input.shift();
        pointsShot = Number(input.shift());

        if (typePoints == 'Retire') {
            console.log(`${playerName} retired after ${counterUnseccesShot} unsuccessful shots.`);
            break;
        }
    }

}
darts([
    'Rob Cross', 'Triple', '20',
    'Triple', '20', 'Triple',
    '20', 'Triple', '20',
    'Double', '20', 'Triple',
    '20', 'Double', '5',
    'Triple', '10', 'Double',
    '6', 'Retire', ''
]
);