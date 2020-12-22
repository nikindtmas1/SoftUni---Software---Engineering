function areaFigures(arg1, arg2, arg3) {
    let figure = arg1;
    let a = Number(arg2);
    let b = Number(arg3);

    if (figure == "square") {
        console.log((a * a).toFixed(3));
    } else if (figure == "rectangle") {
        console.log((a * b).toFixed(3));
    } else if (figure == "circle") {
        console.log((Math.PI * a * a).toFixed(3));
    } else if (figure == "triangle") {
        console.log(((a * b) / 2).toFixed(3));
    }
}
areaFigures("square", "5", "");
areaFigures("rectangle", "7", "2.5");
areaFigures("circle", "6", "");
areaFigures("triangle", "4.5", "20");