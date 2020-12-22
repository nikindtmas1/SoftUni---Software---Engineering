function sumSecond(timeFirst, timeSecond, timeThird) {
    timeFirst = Number(timeFirst);
    timeSecond = Number(timeSecond);
    timeThird = Number(timeThird);

    let totalTime = timeFirst + timeSecond + timeThird;
    let timeInMinet = Math.floor(totalTime / 60);
    let timeInSecond = totalTime % 60;

    if (timeInSecond < 10) {
        console.log(`${timeInMinet}:0${timeInSecond}`);
    } else {
        console.log(`${timeInMinet}:${timeInSecond}`);
    }
}
//sumSecond("35", "45", "44");
//sumSecond("22", "7", "34");
//sumSecond("50", "50", "49");
//sumSecond("14", "12", "10");

function sumSeconde(arg1, arg2, arg3) {
    let timeA = Number(arg1);
    let timeB = Number(arg2);
    let timeC = Number(arg3);

    let sumTime = timeA + timeB + timeC;
    let minutes = Math.floor(sumTime / 60);
    let seconde = sumTime % 60;

    if (seconde <= 9) {
        seconde = (`:0${seconde}`);
    } else {
        seconde = (`:${seconde}`);
    }

    let totalTime = (`${minutes}${seconde}`);
    console.log(totalTime);
}
sumSeconde();