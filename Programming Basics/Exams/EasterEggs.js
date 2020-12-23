function easterEggs(input) {
    let countColoredEggs = Number(input.shift());

    let countarRedEggs = 0;
    let countarOrangeEggs = 0;
    let countarBlueEggs = 0;
    let countarGreenEggs = 0;
    let countarColor = 0;

    let maxNumEggs = Number.MIN_SAFE_INTEGER;
    let maxEggsColor = '';


    while (countarColor < countColoredEggs) {
        let currentColor = input.shift();
        countarColor++;
        switch (currentColor) {
            case 'red': countarRedEggs++;
                if (countarRedEggs > maxNumEggs) {
                    maxNumEggs = countarRedEggs;
                    maxEggsColor = 'red';
                }
                break;
            case 'orange': countarOrangeEggs++;
                if (countarOrangeEggs > maxNumEggs) {
                    maxNumEggs = countarOrangeEggs;
                    maxEggsColor = 'orange';
                }
                break;
            case 'blue': countarBlueEggs++;
                if (countarBlueEggs > maxNumEggs) {
                    maxNumEggs = countarBlueEggs;
                    maxEggsColor = 'blue';
                }
                break;
            case 'green': countarGreenEggs++;
                if (countarGreenEggs > maxNumEggs) {
                    maxNumEggs = countarGreenEggs;
                    maxEggsColor = 'green';
                }
                break;
        }
     
    }
    console.log(`Red eggs: ${countarRedEggs}`);
    console.log(`Orange eggs: ${countarOrangeEggs}`);
    console.log(`Blue eggs: ${countarBlueEggs}`);
    console.log(`Green eggs: ${countarGreenEggs}`);
    console.log(`Max eggs: ${maxNumEggs} -> ${maxEggsColor}`);

}
easterEggs([ '4', 'blue', 'red', 'blue', 'orange', '', '' ]);