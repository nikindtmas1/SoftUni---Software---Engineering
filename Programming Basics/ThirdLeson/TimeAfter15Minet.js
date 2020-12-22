function timeAfter15Min(arg1, arg2) {
    let timeInMinet = Number(arg1);
    let timeInSecond = Number(arg2);
    let sumTime = (timeInMinet * 60) + timeInSecond + 15;
    let totalMinute = Math.floor(sumTime / 60);
    let totalSecond = sumTime % 60;
    if (totalMinute > 23) {
        totalMinute = 0;
    }
    if (totalSecond < 10) {
        console.log(`${totalMinute}:0${totalSecond}`);
    } else {
        console.log(`${totalMinute}:${totalSecond}`);
    }

}
//timeAfter15Min("0", "35");

function timePlus15Minutes(arg1, arg2) {
    let inputHours = Number(arg1);
    let inputMinutes = Number(arg2);

    let moreMinutes = 15;
    let sumTimeMinutes = (inputHours * 60) + inputMinutes + moreMinutes;

    let outputHours = Math.floor(sumTimeMinutes / 60);
    let outputMinutes = sumTimeMinutes % 60;

    if (outputMinutes <= 9) {
        outputMinutes = (`0${outputMinutes}`);
    }
    if (outputMinutes > 59) {
        outputHours += 1;
        outputMinutes -= 60;
    }
    if (outputHours > 23) {
        outputHours -= 24;
    }

    console.log(`${outputHours}:${outputMinutes}`);
}
timePlus15Minutes();