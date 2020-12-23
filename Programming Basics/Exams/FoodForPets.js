function foodForPets(input) {
    let countDay = Number(input.shift());
    let foodTotalBegan = Number(input.shift());

    let foodForDog = 0;
    let foodForCat = 0;
    let foodForPets = 0;
    let countarDay = 0;
    let countarDayCookies = 0;
    let cookies = 0;
    let foodDayDog = Number(input.shift());
    let foodDayCat = Number(input.shift());

    while (countarDay < countDay) {
        countarDay++;
        countarDayCookies++;
        foodForDog += foodDayDog;
        foodForCat += foodDayCat;
        foodForPets += (foodDayDog + foodDayCat);
        if (countarDayCookies == 3) {
            cookies += (foodDayDog + foodDayCat) * 0.10;
            countarDayCookies = 0;
        }
        foodDayDog = Number(input.shift());
        foodDayCat = Number(input.shift());
    }
    let totalProFood = (foodForPets / foodTotalBegan) * 100;
    let dogFoodPro = (foodForDog / foodForPets) * 100;
    let catFoodPro = (foodForCat / foodForPets) * 100;
    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${totalProFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogFoodPro.toFixed(2)}% eaten from the dog.`);
    console.log(`${catFoodPro.toFixed(2)}% eaten from the cat.`);
}
foodForPets([
    '3',   '500',
    '100', '30',
    '110', '25',
    '120', '35'
  ]);