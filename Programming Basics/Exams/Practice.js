function honeyWinterReserves(input){
    let honeyForWinter = Number(input.shift());
    
    let honeyExtraction = 0;
    let honeyStoreg = 0;
    let flag = false;
    let name = input.shift();

    while(name != 'Winter has come'){
    for(let month = 1; month <= 6; month++){
        nexInput = Number(input.shift());
        honeyExtraction += nexInput;
    }
    honeyStoreg += honeyExtraction;
    if(honeyExtraction < 0){
        console.log(`${name} was banished for gluttony`);
    
    }
    if(honeyStoreg >= honeyForWinter){
        let moreHoney = Math.abs(honeyStoreg - honeyForWinter);
        console.log(`Well done! Honey surplus ${moreHoney.toFixed(2)}.`);
        flag = true;
        break;
    }
    
    honeyExtraction = 0;
    name = input.shift();
    
    }
    if(flag == false){
    let haveHoney = Math.abs(honeyStoreg - honeyForWinter);
    console.log(`Hard Winter! Honey needed ${haveHoney.toFixed(2)}.`);
    
}
}
honeyWinterReserves([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',
    'Ely',   '60',
    '30',     '50',
    '70',     '120',
    '110',   'Emy',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yana',   '50',
    '10',     '20',
    '30',     '100',
    '100',
    'Ely',   '6',
    '3',     '5',
    '7',     '12',
    '110',    'Winter has come'
  ]);