function careOfPuppy(input){
    let haveFood = Number(input.shift());

    let haveFoodGram = haveFood * 1000;
    let havePortion = 0;
    let portion = input.shift();

    while(portion != 'Adopted'){
        portion = Number(portion);
        havePortion += portion;
        portion = input.shift();
    }
    let leftFood = Math.abs(haveFoodGram - havePortion);
    if(haveFoodGram >= havePortion){
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    }else{
        console.log(`Food is not enough. You need ${leftFood} grams more.`);
    }
}
careOfPuppy([
    '2',   '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted',
    '',    ''
  ]);