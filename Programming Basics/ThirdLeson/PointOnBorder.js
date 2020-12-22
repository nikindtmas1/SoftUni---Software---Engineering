function pointOnBorder(x1, y1, x2, y2, x, y) {

    x1 = Number(x1);
    y1 = Number(y1);

    x2 = Number(x2);
    y2 = Number(y2);

    x = Number(x);
    y = Number(y);

    let leftOrRightBoarderThouched = ((x == x1 || x == x2) && (y <= y2 && y >= y1));
    let upOrLowerBoarderThouched = ((y == y1 || y == y2) && (x <= x2 && x >= x1));

    if (leftOrRightBoarderThouched || upOrLowerBoarderThouched) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}
pointOnBorder(
   "2 ",
   "-3",
   "12",
   "3 ",
   "10",
   "3",)