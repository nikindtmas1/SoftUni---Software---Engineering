function easterCompetition(input) {
    let countEasterBread = Number(input.shift());

    let sumGrade = 0;
    let countarChefs = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let maxName = '';

    let chef = input.shift();
    let grade = input.shift();
    
    while (countarChefs < countEasterBread) {
        if (grade != 'Stop') {
            grade = Number(grade);
            sumGrade += grade;
            grade = input.shift();
        } else {
            console.log(`${chef} has ${sumGrade} points.`);
            if (maxPoints < sumGrade) {
                maxPoints = sumGrade;
                maxName = chef;
                console.log(`${chef} is the new number 1!`);
            }
            countarChefs++;
            sumGrade = 0;
            chef = input.shift();
            grade = input.shift();
        }

    }
    console.log(`${maxName} won competition with ${maxPoints} points!`);
}
easterCompetition([
    '2',         'Chef Angelov',
    '9',         '9',
    '9',         'Stop',
    'Chef Rowe', '10',
    '10',        '10',
    '10',        'Stop'
  ]);