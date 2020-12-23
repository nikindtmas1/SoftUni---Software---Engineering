function tennisEquipment(input) {
    let tennisRacketPrice = Number(input.shift());
    let numTennisRackets = Number(input.shift());
    let numSneakers = Number(input.shift());

    let sneakersPrice = tennisRacketPrice / 6;

    let tennisRacketSum = numTennisRackets * tennisRacketPrice;
    let sneakersSum = numSneakers * sneakersPrice;
    let othersEquipment = (tennisRacketSum + sneakersSum) * 0.20;

    let totalSum = othersEquipment + sneakersSum + tennisRacketSum;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalSum / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalSum * 7 / 8)}`);
}
tennisEquipment([ '850', '4', '2', '' ]);