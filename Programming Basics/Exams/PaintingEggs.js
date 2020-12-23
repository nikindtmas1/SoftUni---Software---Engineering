function paintingEggs(input) {
    let eggsSize = input.shift();
    let colorEggs = input.shift();
    let countBatches = Number(input.shift());

    let priceBatches = 0;

    if (eggsSize == 'Large') {
        switch (colorEggs) {
            case 'Red': priceBatches = 16; break;
            case 'Green': priceBatches = 12; break;
            case 'Yellow': priceBatches = 9; break;
        }
    } else if (eggsSize == 'Medium') {
        switch (colorEggs) {
            case 'Red': priceBatches = 13; break;
            case 'Green': priceBatches = 9; break;
            case 'Yellow': priceBatches = 7; break;
        }
    } else if (eggsSize == 'Small') {
        switch (colorEggs) {
            case 'Red': priceBatches = 9; break;
            case 'Green': priceBatches = 8; break;
            case 'Yellow': priceBatches = 5; break;
        }
    }
    let sum = countBatches * priceBatches;
    let cost = sum - (sum * 0.35);
    let sumAfter = (sum - cost);
    let totalSum = (sum - sumAfter).toFixed(2);

    console.log(`${totalSum} leva.`);
}
paintingEggs([ 'Small', 'Yellow', '3' ]);