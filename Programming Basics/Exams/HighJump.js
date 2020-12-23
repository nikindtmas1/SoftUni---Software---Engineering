function highJump(input) {
    let highJumpWanted = Number(input.shift());

    let currentJump = 0;
    let badJump = 0;
    let highStart = highJumpWanted - 30;
    let isFale = false;
    let nexJump = Number(input.shift());

    while ( highStart < highJumpWanted) {
        if (badJump < 3) {
            if (nexJump > highStart) {
                badJump = 0;
                currentJump++;
                highStart += 5;
                nexJump = Number(input.shift());
            } else {
                badJump++;
                currentJump++
                nexJump = Number(input.shift());
               
            }
        } else {
            isFale = true;
            console.log(`Tihomir failed at ${highStart}cm after ${currentJump} jumps.`);
            break;
        }
    }
    if ( isFale == false) {
        console.log(`Tihomir succeeded, he jumped over ${highStart - 5}cm after ${currentJump} jumps.`);
    }//else{
    //    console.log(`Tihomir failed at ${highStart}cm after ${currentJump} jumps.`); 
    //}
}
highJump([
    '231', '205', '212',
    '213', '228', '229',
    '230', '235', ''
  ]
  
  );