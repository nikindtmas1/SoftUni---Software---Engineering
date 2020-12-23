function beehiveRole(arg1, arg2, arg3) {
    let intellect = Number(arg1);
    let forse = Number(arg2);
    let gender = arg3;

    let role = '';
    if (intellect >= 80) {
        if (forse >= 80) {
            if (gender == 'female') {
                role = 'Queen Bee';
            }
        } else {
            if (gender == 'female' || gender == 'male') {
                role = 'Repairing Bee';
            }
        }
    } else if (intellect >= 60) {
        role = 'Cleaning Bee';
    } else if(intellect < 60){
        if (forse >= 80) {
            if (gender == 'male') {
                role = 'Drone Bee';
            }
        } else if (forse >= 60) {
            role = 'Guard Bee';
        }else {
            role = 'Worker Bee';
        } 
    }
    console.log(role)
}
beehiveRole('81' ,'159' ,'female');