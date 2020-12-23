function graduetion(input) {
    let name = input.shift();
    let grade = 0;
    let summark = 0;
    while (grade < 12) {
        let mark = Number(input.shift());
        if (mark >= 4.0) {
            grade++;
            summark += mark;
        }
    }
    let averagemark = summark / 12;
    if (averagemark >= 4.0) {
        console.log(`${name} graduated. Average grade: ${averagemark.toFixed(2)}`);
    } else {
        console.log(`${name} not graduated. Average grade: ${averagemark.toFixed(2)}`);
    }
}
//graduetion(['Pesho', '4', '5.5', '6', '5.43', '4.5', '6', '5.55', '3', '3', '6', '5.43', '5', '6']);

function gradduation(input) {
    let nameStudant = input.shift();

    let countarYearsGrade = 0;
    let sumYearsGrade = 0;

    while (countarYearsGrade < 12) {
        let yearGrade = Number(input.shift());
        if (yearGrade >= 4) {
            countarYearsGrade++;
            sumYearsGrade += yearGrade;
        } else {
            countarYearsGrade = countarYearsGrade;
        }
    }
    let averageGrade = (sumYearsGrade / countarYearsGrade).toFixed(2);
    console.log(`${nameStudant} graduated. Average grade: ${averageGrade}`)
}
gradduation([
    'Ani', '5',    '5.32',
    '6',   '5.43', '5',
    '6',   '5.5',  '4.55',
    '5',   '6',    '5.56',
    '6',   '5'
  ]);