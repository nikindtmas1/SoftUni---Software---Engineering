function daceHall(arg1, arg2, arg3) {
    let l = Number(arg1);
    let w = Number(arg2);
    let a = Number(arg3);

    let hallArea = (l * 100) * (w * 100);
    let wardrobeArea = (a * 100) * (a * 100);
    let benchArea = hallArea / 10;
    let freeArea = hallArea - wardrobeArea - benchArea;
    let quantityDancer = Math.floor(freeArea / (40 + 7000));
    console.log(quantityDancer);

}
daceHall("50", "25", "2");