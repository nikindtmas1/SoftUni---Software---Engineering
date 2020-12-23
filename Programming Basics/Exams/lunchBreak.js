function lunchBreak(input) {
    let nameSerial = input.shift();
    let timeEpisode = Number(input.shift());
    let timeBreak = Number(input.shift());

    let lunchTime = timeBreak / 8;
    let restTime = timeBreak / 4;
    let timeForEpisode = timeBreak - lunchTime - restTime;

    let lastTime = Math.abs(timeForEpisode - timeEpisode);
    if (timeForEpisode >= timeEpisode) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(lastTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(lastTime)} more minutes.`);
    }

}
lunchBreak([ 'CW', '45', '51' ]);