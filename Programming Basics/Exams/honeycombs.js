function honeycombs(arg1, arg2){
    let countBee = Number(arg1);
    let countFlowers = Number(arg2);

    let honey = countBee * countFlowers * 0.21;
    let honeycombs = Math.floor(honey / 100);
    let left = (honey % 100);
    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${left.toFixed(2)} grams of honey left.`);

}
honeycombs('11', '120');