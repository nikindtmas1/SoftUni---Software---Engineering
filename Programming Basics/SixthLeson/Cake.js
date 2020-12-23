function cake(input) {
    let lengthCake = Number(input.shift());
    let widthCake = Number(input.shift());

    let comand = false;
    let cakeSquare = lengthCake * widthCake;
    let pieceCake = 1;
    let leftCake = cakeSquare;
    let countarPiece = 0;

    while (comand == false && leftCake >= 0) {
        let comand = input.shift();
        if (comand == 'STOP') {
            comand = true; break;
        } else {
            comand = Number(comand);
            countarPiece += comand;
            leftCake -= (comand * pieceCake);
        }
    }
    if (leftCake < 0) {
        let leftCakeNeeded = Math.abs(leftCake);
        console.log(`No more cake left! You need ${leftCakeNeeded} pieces more.`);
    } else {
        let leftCakeMore = cakeSquare - countarPiece;
        console.log(`${leftCakeMore} pieces are left.`);
    }
}
cake([
    '10', '10',
    '20', '20',
    '20', '20',
    '21'
  ]);