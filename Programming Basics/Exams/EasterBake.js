function easterBake(input) {
    let countEasterBread = Number(input.shift());
    let spentSugar = Number(input.shift());
    let spentFlour = Number(input.shift());

    let totalSpentSugar = 0;
    let maxSpentSugar = Number.MIN_SAFE_INTEGER;
    let totalSpentFlour = 0;
    let maxSpentFlour = Number.MIN_SAFE_INTEGER;
    let countarEasterBread = 0;

    while (countarEasterBread < countEasterBread) {
        countarEasterBread++;
        totalSpentSugar += spentSugar;
        if (spentSugar > maxSpentSugar) {
            maxSpentSugar = spentSugar;
        }
        totalSpentFlour += spentFlour;
        if (spentFlour > maxSpentFlour) {
            maxSpentFlour = spentFlour;
        }

        spentSugar = Number(input.shift());
        spentFlour = Number(input.shift());
    }
    let neededSugarPack = Math.ceil(totalSpentSugar / 950);
    let neededFlourPack = Math.ceil(totalSpentFlour / 750);

    console.log(`Sugar: ${neededSugarPack}`);
    console.log(`Flour: ${neededFlourPack}`);
    console.log(`Max used flour is ${maxSpentFlour} grams, max used sugar is ${maxSpentSugar} grams.`);

}
easterBake([
    '4',   '500', '350',
    '560', '430', '600',
    '345', '578', '543',
    ''
  ]);