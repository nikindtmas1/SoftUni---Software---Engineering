function solve(inptuExamHour, inputExamMinutes, inputArrivalHour, inputArrivalMinutes){
    let examHour = Number(inptuExamHour);
    let examMinutes = Number(inputExamMinutes);
    let arrivalHour = Number(inputArrivalHour);
    let arrivalMinutes = Number(inputArrivalMinutes); 
 
    let timeExam = (examHour * 60) + examMinutes;
    let timeArrival = (arrivalHour * 60) + arrivalMinutes;
 
    let difference = Math.abs(timeExam - timeArrival);
 
    if(timeExam === timeArrival || (difference <= 30 && timeExam > timeArrival)){
        if(difference > 0){
            console.log(`On time`);
            console.log(`${difference} minutes before the start`);
        } else {
            console.log('On time');
        }
    } else if(timeExam > timeArrival){
        let hoursEarly = parseInt(difference/60);
        let minutesEarly = difference % 60;
 
        if(hoursEarly === 0){
            console.log(`Early`);
            console.log(`${minutesEarly} minutes before the start`);
        } else if(minutesEarly === 0){
            console.log(`Early`);
            console.log(`${hoursEarly}:00 hours before the start`);
        } else if(minutesEarly < 10){
            console.log(`Early`);
            console.log(`${hoursEarly}:0${minutesEarly} hours before the start`)
        } else {
            console.log(`Early`);
            console.log(`${hoursEarly}:${minutesEarly} hours before the start`);
        }
    } else if(timeArrival > timeExam){
        let hoursLate = parseInt(difference/60);
        let minutsLate = difference % 60;
 
        if(hoursLate === 0){
            console.log(`Late`);
            console.log(`${minutsLate} minutes after the start`);
        } else if (minutsLate === 0){
            console.log(`Late`);
            console.log(`${hoursLate}:00 hours after the start`);
        } else if (minutsLate < 10){
            console.log(`Late`);
            console.log(`${hoursLate}:0${minutsLate} hours after the start`);
        } else {
            console.log(`Late`);
            console.log(`${hoursLate}:${minutsLate} hours after the start`);
        }
    }
}
solve();