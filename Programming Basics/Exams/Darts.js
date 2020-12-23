function darts(input){
    let playerName = input.shift();
    let typePoints = input.shift();
    let pointsShot = Number(input.shift());

    let points = 301;
    let counterShot = 0;
    let couterUnseccesShot = 0;
    
    while (typePoints != 'Retare') {
        if(typePoints == 'Triple'){
            points = points - (pointsShot * 3);
            counterShot++;
            typePoints = input.shift();
         pointsShot = Number(input.shift());
         if(typePoints == 'Retare'){
             console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
         break;
            }
        if(points == 0){
            console.log(`${playerName} won the leg with ${counterShot} shots.`);
            break;
        }else if(points < 0){
            console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
         break;
        }
            
        }else if(typePoints == 'Double'){
            points = points - (pointsShot * 2);
            counterShot++;
            typePoints = input.shift();
         pointsShot = Number(input.shift());
         if(typePoints == 'Retare'){
            console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
        break;
        }
         if(points == 0){
            console.log(`${playerName} won the leg with ${counterShot} shots.`);
            break;
        }else if(points < 0){
            console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
         break;
        }
        }else if(typePoints == 'Single'){
            points = points - pointsShot;
            counterShot++;
            typePoints = input.shift();
         pointsShot = Number(input.shift());
         if(typePoints == 'Retare'){
            console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
            break;
        }else if(points < 0){
            console.log(`${playerName} retired after ${counterShot} unsuccessful shots.`);
         break;
        }

         if(points == 0){
            console.log(`${playerName} won the leg with ${counterShot} shots.`);
    
            break;
        }
        }
   
    }
    
}
darts([
    'Michael van Gerwen', 'Triple',
    '20',                 'Triple',
    '19',                 'Double',
    '10',                 'Single',
    '3',                  'Single',
    '1',                  'Triple',
    '20',                 'Triple',
    '20',                 'Double',
    '20',                 ''
  ]
  );