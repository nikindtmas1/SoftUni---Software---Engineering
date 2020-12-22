
function convertDimension(arg1, arg2, arg3) {
    let dimenValue = Number(arg1);
    let fromDimension = arg2;
    let toDimension = arg3;

    switch (fromDimension) {
        case "cm":
            dimenValue *= 10;
            break;
        case "m":
            dimenValue *= 1000;
            break;
        default:
            break;
    }
    switch (toDimension) {
        case "cm":
            dimenValue /= 10;
            break;
        case "m":
            dimenValue /= 1000;
            break;
        default:
            break;
    }
    console.log(dimenValue.toFixed(3));
}
//convertDimension("12", "mm", "m");
//convertDimension("150", "m", "cm");
//convertDimension("45", "cm", "mm");
//convertDimension("20", "m", "mm");
//convertDimension("20", "mm", "cm");

function metricConverter(arg1, arg2, arg3) {
    let num = Number(arg1);
    let inputMeasure = arg2;
    let outputMeasure = arg3;

    let converter = 0;

    if (inputMeasure == 'mm') {
        if (outputMeasure == 'cm') {
            converter = num / 10;
        } else if (outputMeasure == 'm') {
            converter = num / 1000;
        }
    } else if (inputMeasure == 'cm') {
        if (outputMeasure == 'm') {
            converter = num / 100;
        } else if (outputMeasure == 'mm') {
            converter = num * 10;
        }
    } else if (inputMeasure = 'm') {
        if (outputMeasure == 'cm') {
            converter = num * 100;
        } else if (outputMeasure == 'mm') {
            converter = num * 1000;
        }
    }
    console.log(converter.toFixed(3));
}
metricConverter();

