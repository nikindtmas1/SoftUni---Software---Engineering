function sleepyCat(arg) {
    let daysOff = Number(arg);

    let playNorme = 30000;
    let workDays = 365 - daysOff;
    let minutesPlay = (workDays * 63) + (daysOff * 127);

    if (minutesPlay > playNorme) {

        let morePlay = minutesPlay - playNorme;
        let hoursMore = morePlay / 60;
        let minutesMore = morePlay % 60;

        console.log('Tom will run away');
        console.log(`${Math.floor(hoursMore)} hours and ${minutesMore} minutes more for play`);

    } else if (minutesPlay < playNorme) {

        let lessPlay = playNorme - minutesPlay;
        let hoursLess = lessPlay / 60;
        let minutesLess = lessPlay % 60;

        console.log('Tom sleeps well');
        console.log(`${Math.floor(hoursLess)} hours and ${minutesLess} minutes less for play`);
    }
}
sleepyCat('113');