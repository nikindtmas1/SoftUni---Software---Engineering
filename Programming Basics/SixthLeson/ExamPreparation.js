function examPreparation(input) {
    let maxUnsatisfactory = Number(input.shift());
    let nameProblem = input.shift();
    let grade = Number(input.shift());

    let countarUnGrade = 0;
    let lastProblem = '';
    let solvedProblems = 0;
    let sumGrade = 0;
    let comandEnough = false;

    while (countarUnGrade < maxUnsatisfactory) {
        if (nameProblem == 'Enough') {
            comandEnough = true;
            break;
        }
        lastProblem = nameProblem;
        if (grade <= 4) {
            countarUnGrade++;
            solvedProblems++;
            sumGrade += grade;
        } else {
            solvedProblems++;
            sumGrade += grade;
        }
        nameProblem = input.shift();
        grade = Number(input.shift());
    }
    if (comandEnough == false) {
        console.log(`You need a break, ${countarUnGrade} poor grades.`);

    } else {
        let average = (sumGrade / solvedProblems).toFixed(2);
        console.log(`Average score: ${average}`);
        console.log(`Number of problems: ${solvedProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation([ '4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough' ]);