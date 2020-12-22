function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let success = Number(arg2);
    let minSalary = Number(arg3);

    if (success >= 5.50) {
        schoolShipEx = Math.floor(success * 25);
        console.log(`You get a scholarship for excellent results ${schoolShipEx} BGN`);
    } else if (income <= minSalary && success >= 4.50) {
        schoolShip = Math.floor(minSalary * 0.35);
        console.log(`You get a Social scholarship ${schoolShip} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }

}
//scholarship("300.00", "5.65", "420.00");
 //         доход.лв  успех    мин.заплата

 function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let grade = Number(arg2);
    let minWage = Number(arg3);
    let social = 0;
    let academic = 0;
    if (grade >= 5.5) {
        academic = grade * 25;
    }

    if (income < minWage && grade > 4.5) {
        social = minWage * 0.35;
    }

    if (social == 0 && academic == 0){
        console.log("You cannot get a scholarship!");


    } else if (social <= academic) {
        console.log(`You get a scholarship for excellent results ${Math.floor(academic)} BGN`);


    } else {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    }


}
//scholarship("300.00", "5.65", "420.00");
//scholarship("480.00", "4.60", "450.00");
 //         доход.лв  успех    мин.заплата
function scholarShip(arg1, arg2, arg3) {
    let income = Number(arg1);
    let success = Number(arg2);
    let minSalary = Number(arg3);
    let socialShip = 0;
    let excellentShip = 0;

    if (success >= 5.5) {
        excellentShip = success * 25;
    }
    if (income < minSalary && success > 4.5) {
        socialShip = minSalary * 0.35;
    }
    if (socialShip == 0 && excellentShip == 0) {
        console.log("You cannot get a scholarship!");
    } else if (socialShip <= excellentShip) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentShip)} BGN`);
    } else {
        console.log(`You get a Social scholarship ${Math.floor(socialShip)} BGN`)
    }

}
//scholarShip("300.00", "5.65", "420.00");
//scholarShip("480.00", "4.60", "450.00");
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
scholarShip("300.00", "5.65", "420.00");