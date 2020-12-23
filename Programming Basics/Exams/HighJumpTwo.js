function solveHighJump(input) {
    let highJumpWanted = Number(input.shift());

    let startHigh = highJumpWanted - 30;
    let countarJump = 0;
    let countarBadJump = 0;
    let currentHigh = startHigh;

    
    while (true) {
        let currentJump = Number(input.shift());
        countarJump++;
            if (currentJump > currentHigh) {
                countarBadJump = 0;
                if(currentHigh >= highJumpWanted){
                    console.log(`Tihomir succeeded, he jumped over ${currentHigh}cm after ${countarJump} jumps.`);
                break;
                }else{
                currentHigh += 5;
                }
            } else {
                countarBadJump++;
                if (countarBadJump == 3) {
                    console.log(`Tihomir failed at ${currentHigh}cm after ${countarJump} jumps.`);
                    break;
                }
            }
       
    }
    
}
solveHighJump([
    '231', '205', '212',
    '213', '228', '229',
    '230', '235', ''
  ]
  );
