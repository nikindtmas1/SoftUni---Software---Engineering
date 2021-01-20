function heroicInventory(input) {

    let arrInput = [...input];
    let output = [];

    for (let i = 0; i < arrInput.length; i++) {

        let register = {};

        let currHero = arrInput[i].split(' / ');

        [heroName, heroLevel, items] = currHero;

        register['name'] = heroName;
        register['level'] = Number(heroLevel);

        if (items != undefined && items != '') {

            let arrItems = items.split(', ');

            register['items'] = arrItems;

            output.push(register);

        }else{

            output.push(register);

        }
    }

    output = JSON.stringify(output);

    return output;

}

console.log(heroicInventory(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
