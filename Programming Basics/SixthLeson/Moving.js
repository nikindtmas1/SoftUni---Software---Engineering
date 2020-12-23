function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let spaceLimit = width * length * height;
    let boxSpace = 0;


    while (boxSpace < spaceLimit) {
        let nexBoxes = input.shift();

        if (nexBoxes != 'Done') {
            nexBoxes = Number(nexBoxes);
            boxSpace += nexBoxes;

        } else {
            let freeSpace = spaceLimit - boxSpace;
            console.log(`${freeSpace} Cubic meters left.`);
            return;
        }
        if (spaceLimit < boxSpace) {
            let notFreeSpace = boxSpace - spaceLimit;
            console.log(`No more free space! You need ${notFreeSpace} Cubic meters more.`);
            return;
        }

    }

}
//moving(['10', '10',  '2', '20', '20', '20', '20', '122']);
//muving(['10', '1',  '2', '4', '6', 'Done']);

function muving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let heigth = Number(input.shift());

    let fullSpace = width * length * heigth;
    let boxSpace = 0;
    let boxSize = 1;
    let comand = input.shift();

    while (comand != 'Done' && boxSpace <= fullSpace) {
        nexBox = Number(comand);
        boxSpace += nexBox * boxSize;
        comand = input.shift();
    }

    let leftCubic = Math.abs(fullSpace - boxSpace);
    if (comand == 'Done') {
        console.log(`${leftCubic} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${leftCubic} Cubic meters more.`)
    }
}
muving([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ]);