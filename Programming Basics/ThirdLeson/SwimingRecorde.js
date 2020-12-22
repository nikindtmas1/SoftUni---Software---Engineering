function swimingRecorde(arg1, arg2, arg3) {
    let recordeInSecond = Number(arg1);
    let distans = Number(arg2);
    let timeForMinet = Number(arg3);
    let swimingTime = distans * timeForMinet;

    let resistanceTime = Math.floor(distans / 15) * 12.5;

    let totalTime = swimingTime + resistanceTime;

    if (recordeInSecond <= totalTime) {
        moreSwimTime = (totalTime - recordeInSecond);
        console.log(`No, he failed! He was ${moreSwimTime.toFixed(2)} seconds slower.`);
    } else {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}
//swimingRecorde("55555.67", "3017", "5.03");

function worldSwimmingRecorde(arg1, arg2, arg3) {
    let worldrecorde = Number(arg1);
    let distansMeters = Number(arg2);
    let secondForMeter = Number(arg3);

    let swimmTime = distansMeters * secondForMeter;
    let moreSwimmtime = Math.floor(distansMeters / 15) * 12.5;
    let totalSwimmTime = swimmTime + moreSwimmtime;

    if (totalSwimmTime < worldrecorde) {
        console.log(`Yes, he succeeded! The new world record is ${totalSwimmTime.toFixed(2)} seconds.`);
    } else {
        let neededTime = totalSwimmTime - worldrecorde;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecorde();