function volleyball(arg1, arg2, arg3) {
    let year = arg1.toLowerCase();
    let p = Number(arg2);
    let h = Number(arg3);
    let games = 0;

    if (year == "normal") {
        games = 0.75 * (48 - h) + (0.66666667) * p + h;
    }
    else if (year == "leap") {
        games = 1.15 * (0.75 * (48 - h) + (0.66666667) * p + h);
    }
    console.log(Math.floor(games));
}
volleyball('normal','11','6');