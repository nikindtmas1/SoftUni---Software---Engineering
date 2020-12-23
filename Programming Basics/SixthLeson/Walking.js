function walking(input) {
    let goalWalk = 10000;
    let currantWalk = 0;
    let comand = '';

    while (currantWalk < goalWalk && comand != 'Going home') {
        let numWalk = input.shift();
        if (numWalk == 'Going home') {
            comand = numWalk;
            numWalk = Number(input.shift());
            currantWalk += numWalk;

        } else {
            numWalk = Number(numWalk);
            currantWalk += numWalk;
        }
    }
    if (currantWalk >= goalWalk) {
        console.log(`Goal reached! Good job!`);
    } else {
        let differ = Math.abs(goalWalk - currantWalk);
        console.log(`${differ} more steps to reach goal.`);
    }

}
walking([ '1500', '300', '2500', '3000', 'Going home', '200' ]);