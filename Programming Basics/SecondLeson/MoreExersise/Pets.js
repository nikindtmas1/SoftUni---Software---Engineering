function pets(arg1, arg2, arg3, arg4, arg5) {
    let dayTravel = Number(arg1);
    let totalFood = Number(arg2);//kg
    let dogFoodDay = Number(arg3);//kg
    let catFoodDay = Number(arg4);//kg
    let turtleFoodDay = Number(arg5);//gr


    let consumedFoodDog = dayTravel * dogFoodDay;
    let consumedFoodCat = dayTravel * catFoodDay;
    let consumedFoodTurtle = dayTravel * (turtleFoodDay / 1000);

    let totalConsumedFood = consumedFoodDog + consumedFoodCat + consumedFoodTurtle;

    if (totalFood >= totalConsumedFood) {

        let restFood = totalFood - totalConsumedFood;
        console.log(`${Math.floor(restFood)} kilos of food left.`);

    } else {

        let neededFood = totalConsumedFood - totalFood;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}
//pets('2','10','1','1','1200');
pets('5','10','2.1','0.8','321');
 //  day, food,dog,cat,turtle