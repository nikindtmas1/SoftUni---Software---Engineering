function speedInfo(speed) {
    speed = Number(speed);
    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else if (speed > 1000) {
        console.log("extremely fast");
    }
}
//speedInfo("8");
//speedInfo("49.5");
//speedInfo("126");
//speedInfo("160");
//speedInfo("3500");

function speedInfo(arg) {
    let speed = Number(arg);
    let result = '';

    if (speed <= 10) {
        result = 'slow'
    } else if (speed <= 50) {
        result = 'average';
    } else if (speed <= 150) {
        result = 'fast';
    } else if (speed <= 1000) {
        result = 'ultra fast';
    } else if (speed > 1000) {
        result = 'extremely fast';
    }

    console.log(result);
}
speedInfo();