function roadRadar(speedIn, area) {

    let limit1 = 20;
    let limit2 = 50;
    let limit3 = 90;
    let limit4 = 130;

    switch (area) {
        case 'residential': console.log(checkLimit(speedIn, limit1));
            break;
        case 'city': console.log(checkLimit(speedIn, limit2));
            break;
        case 'interstate': console.log(checkLimit(speedIn, limit3));
            break;
        case 'motorway': console.log(checkLimit(speedIn, limit4));
            break;
    }

    function checkLimit(speed, limit) {
        if (speed <= limit) {
            return `Driving ${speed} km/h in a ${limit} zone`;
        } else if (speed > limit) {
            let overLimit = speed - limit;
            if (overLimit > 20 && overLimit <= 40) {
                let status = 'excessive speeding';
                return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`;
            } else if (overLimit >= 1 && overLimit <= 20) {
                let status = 'speeding';
                return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`;
            } else {
                let status = 'reckless driving';
                return `The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`;
            }

        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');