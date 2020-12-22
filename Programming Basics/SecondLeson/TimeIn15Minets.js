function timeIn15Minets([arg1, arg2]) {
    let hoursIn = Number(arg1);
    let minutesIn = Number(arg2);

    let raise = 15;
    let convertHoursToMin = hoursIn * 60;
    let totalMin = convertHoursToMin + minutesIn + raise;

    let resultHours = totalMin / 60;
    let resultMinutes = totalMin % 60;

    if (resultMinutes < 10) {
        resultMinutes = ('0' + resultMinutes);
    }
    if (resultMinutes >= 60) {
        resultHours += 1;
        resultMinutes -= 60;
    }
    if (resultHours >= 24) {
        resultHours -= 24;
    }


    console.log(`${Math.floor(resultHours)}:${resultMinutes}`);

}
timeIn15Minets(['12', '49']);