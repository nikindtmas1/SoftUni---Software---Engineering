function partyTime(inputArr){

   let list = {
       'VIP':[],
       'regular':[]
   }

   let name = inputArr.shift();

   while(name != 'PARTY'){

    let char = name[0];

    if(!isNaN(char)){

        list['VIP'].push(name);

    }else{

        list['regular'].push(name);
    }


    name = inputArr.shift();

   }

   inputArr.forEach(name => {

    if(list['VIP'].includes(name)){

        let index = list['VIP'].indexOf(name);

        list['VIP'].splice(index, 1);

    }else if(list['regular'].includes(name)){

        let index = list['regular'].indexOf(name);

        list['regular'].splice(index, 1);

    }
       
   });

   console.log(list['VIP'].length + list['regular'].length);
   console.log(list['VIP'].join('\n') + '\n' + list['regular'].join('\n'));
    
}

partyTime([
    '7IK9Yo0h', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc'
  ]);