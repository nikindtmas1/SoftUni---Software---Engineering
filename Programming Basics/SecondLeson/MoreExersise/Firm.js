function firm(arg1, arg2, arg3) {
    let neededHours = Number(arg1);
    let daysForProject = Number(arg2);
    let employees = Number(arg3);

    let daysWorkProject = daysForProject - (daysForProject * 0.10);
    let workHours = daysWorkProject * 8;
    let moreHours = employees * (2 * daysForProject);
    let totalWorkHours = Math.floor(workHours + moreHours);

    if (totalWorkHours >= neededHours) {

        let remainHours = totalWorkHours - neededHours;
        console.log(`Yes!${remainHours} hours left.`);

    } else {

        let notEnough = neededHours - totalWorkHours;
        console.log(`Not enough time!${notEnough} hours needed.`);
    }
}
firm('90', '7', '3');