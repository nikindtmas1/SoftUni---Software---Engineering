function fitnessCenter(input) {
    let quantityPeople = Number(input.shift());
    let typExercises = input.shift();

    let peopleIn = 0;
    let countarBack = 0;
    let countarChest = 0;
    let countarLegs = 0;
    let countarAbs = 0;
    let countarProteinShake = 0;
    let countarProteinBar = 0;

    while (peopleIn < quantityPeople) {
        switch (typExercises) {
            case "Back":
                countarBack++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
            case "Chest":
                countarChest++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
            case "Legs":
                countarLegs++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
            case "Abs":
                countarAbs++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
            case "Protein shake":
                countarProteinShake++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
            case "Protein bar":
                countarProteinBar++;
                peopleIn++;
                if (peopleIn < quantityPeople)
                    typExercises = input.shift();
                break;
        }
    }
    let trainingPeople = countarBack + countarChest + countarLegs + countarAbs;
    let productPeople = countarProteinShake + countarProteinBar;
    let procentTrainigPeople = (trainingPeople / quantityPeople) * 100;
    let procentProductPeople = (productPeople / quantityPeople) * 100;

    console.log(`${countarBack} - back`);
    console.log(`${countarChest} - chest`);
    console.log(`${countarLegs} - legs`);
    console.log(`${countarAbs} - abs`);
    console.log(`${countarProteinShake} - protein shake`);
    console.log(`${countarProteinBar} - protein bar`);
    console.log(`${procentTrainigPeople.toFixed(2)}% - work out`);
    console.log(`${procentProductPeople.toFixed(2)}% - protein`);
}
fitnessCenter([
    '7',
    'Chest',
    'Back',
    'Legs',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    ''
  ]
  );