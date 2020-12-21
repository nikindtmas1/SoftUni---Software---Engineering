function inventory(input){

    let heroes = [];

    input.forEach(hero => {

        let tokens = hero.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ')
        .sort((a, b) => a.localeCompare(b)).join(', ');

        heroes.push({name, level, items});
        
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {

        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);

    });

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ]);