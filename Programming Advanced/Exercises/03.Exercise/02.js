function constructionCrew(input) {

    let workar = input;

    if (workar.dizziness == true) {

        let needWater = 0.1 * workar.weight * workar.experience;
        let oldHydrated = workar.levelOfHydrated;
        let newHydrated = oldHydrated + needWater;

        workar.levelOfHydrated = newHydrated;

        workar.dizziness = false;

        return workar;

    } else if (workar.dizziness == false) {

        return workar;
    }

}

console.log(constructionCrew(
    { weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true }));
