function maxSequenceEqualElements(inputArray) {
    let n = inputArray.length;

    let bestSequence = [];

    for (let index = 0; index < n; index++) {
        let element = inputArray[index];
        let currentSequence = [element];


        for (let i = index + 1; i < n; i++) {
            let nexElement = inputArray[i];

            if (element === nexElement) {
                currentSequence.push(nexElement);
                index = i;
            } else {
                break;
            }

        }
        if (currentSequence.length > bestSequence.length) {
            bestSequence = currentSequence;
        }
    }
    console.log(bestSequence.join(' '));
}