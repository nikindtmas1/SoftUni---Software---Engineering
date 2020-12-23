function trainTrainers(input) {
    let juryCount = Number(input.shift());
    let namePresent = input.shift();

    let sumGrade = 0;
    let countarGrade = 0;
    let totalSumGrade = 0;
    let totalCountGrade = 0;

    while (namePresent != 'Finish') {
        let grade = Number(input.shift());
        while (countarGrade < juryCount) {
            sumGrade += grade;
            countarGrade++;
            totalCountGrade++;
            totalSumGrade += grade;
            if (countarGrade < juryCount) {
                grade = Number(input.shift());
            }

        }
        let averageGrade = sumGrade / countarGrade;
        console.log(`${namePresent} - ${averageGrade.toFixed(2)}.`);

        countarGrade = 0;
        sumGrade = 0;

        namePresent = input.shift();

    }
    let totalAveragGrade = totalSumGrade / totalCountGrade;
    console.log(`Student's final assessment is ${totalAveragGrade.toFixed(2)}.`);
}
trainTrainers([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ]);