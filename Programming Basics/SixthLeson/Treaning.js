function graduationTwo(input) {
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

//graduationTwo(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6', '5.43', '5']);

function scholarShip(arg1, arg2, arg3) {
    let incom = Number(arg1);
    let success = Number(arg2);
    let minSalary = Number(arg3);

    let social = 0;
    let excellent = 0;

    if (success >= 4.50) {
        if (incom <= minSalary) {
            social = minSalary * 0.35;
        }
    }
    if (success >= 5.50) {
        excellent = success * 25;

    }
    if (social > excellent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else if (excellent > social) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }
}

scholarShip('480.00', '4.60', '450.00');