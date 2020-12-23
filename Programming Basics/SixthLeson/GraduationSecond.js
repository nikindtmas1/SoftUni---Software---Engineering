function graduetionPt2(input) {
    let name = input.shift();
    let grade = 1;
    let summark = 0;
    let badgrade = 0;

    while (grade <= 12) {
        let mark = Number(input.shift());
        if (mark >= 4.0) {
            grade++;
            summark += mark;

        } else {
            badgrade++;
            if (badgrade == 2) {
                console.log(`${name} has been excluded at ${grade} grade`);
                return;
            }
        }

    }
    let averagemark = summark / 12;
    console.log(`${name} graduated. Average grade: ${averagemark.toFixed(2)}`);

}

//graduetionPt2(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6', '5.43', '5']);

function gradduetSecond(input) {
    let nameStudent = input.shift();

    let bedYearGrade = 0;
    let sumGrade = 0;
    let countarYearsGrade = 0;
    let badGrade = false;

    while (countarYearsGrade < 12) {
        let yearGrade = Number(input.shift());
        if (yearGrade >= 4) {
            countarYearsGrade++;
            sumGrade += yearGrade;
        } else {
            bedYearGrade++;
            countarYearsGrade++;
        }
        if (bedYearGrade == 2) {
            badGrade = true;
            countarYearsGrade--;
            break;
        }
    }
    if (badGrade == true) {
        console.log(`${nameStudent} has been excluded at ${countarYearsGrade} grade`);
    } else {
        let averageGrade = (sumGrade / countarYearsGrade).toFixed(2);
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade}`);
    }
}
gradduetSecond([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]);