function onTimeForExam(hourExam, minutesExam, hoursArive, minutesArive) {
    hourExam = Number(hourExam);
    minutesExam = Number(minutesExam);
    hoursArive = Number(hoursArive);
    minutesArive = Number(minutesArive);

    

    if (hoursArive == hourExam) {
        if (minutesArive == minutesExam) {
            console.log(`on time`);
        } else if (minutesArive > minutesExam) {
            let lateTime = minutesArive - minutesExam;
            console.log(`late`);
            console.log(`${lateTime} minutes after the start`);
        } else if (minutesExam > minutesArive) {
            let earlyTime = minutesExam - minutesArive;
            if (earlyTime <= 30) {
                console.log(`on time`);
                console.log(`${earlyTime} minutes before the start`);
            } else if(earlyTime > 30){
                console.log(`early`);
                console.log(`${earlyTime} minutes before the start`);
            }
        }
    } else if (hoursArive < hourExam) {
        let earlyHours = hourExam - hoursArive;
        let hoursChange = 0;
        let minutesChange = 0;
        if (minutesArive == minutesExam) {
            minutesChange = "0" + "0";
            console.log(`early`);
            console.log(`${earlyHours}:${minutesChange} hours before the start`);
        } else if (minutesArive > minutesExam) {
            minutesChange = 60 - (minutesArive - minutesExam);
            hoursChange = earlyHours - 1;
            if (minutesChange <= 30) {
                console.log(`on time`);
                console.log(`${minutesChange} minutes before the start`);
            } else {
                console.log(`early`);
                console.log(`${minutesChange} minutes before the start`);
            }
        } else if (minutesArive < minutesExam) {
            minutesChange = minutesExam - minutesArive;
            hoursChange = earlyHours;
            if (minutesChange <= 9) {
                minutesChange = "0" + minutesChange;
            } else {
                minutesChange = minutesChange;
            }
            console.log(`early`);
            console.log(`${hoursChange}:${minutesChange} hours before the start`);
        }

    } else if (hoursArive > hourExam) {
        let lateHours = hoursArive - hourExam;
        let minutesChange = 0;
        if (minutesArive == minutesExam) {
            minutesChange = "0" + "0";
            console.log(`late`);
            console.log(`${lateHours}:${minutesChange} hours after the start`);
        } else if (minutesArive > minutesExam) {
            minutesChange = minutesArive - minutesExam;
            if (minutesChange <= 9) {
                minutesChange = "0" + minutesChange;
            }
            console.log(`late`);
            console.log(`${lateHours}:${minutesChange} hours after the start`);
        } else if (minutesArive < minutesExam) {
            minutesChange = 60 - (minutesExam - minutesArive);
            lateHours = lateHours - 1;
            //if (lateHours >= 1) {
                //console.log(`Late ${lateHours}:${minutesChange} hours after the start`);
            //} 
            //else {
                console.log(`late`);
                console.log(`${minutesChange} minutes after the start`);
           // }
        }

    }

}
onTimeForExam("24", "00", "10", "30");
//11 30 10 55