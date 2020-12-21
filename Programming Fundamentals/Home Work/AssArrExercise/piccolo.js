function piccolo(input){

    let parking = {};

    for (const line of input) {

        let tokens = line.split(', ');

        let command = tokens[0];
        let carNum = tokens[1];

        if(command == 'IN'){

            parking[carNum] = 1;

        }else if(command == 'OUT'){

                   delete parking[carNum];
                
            }

        }
        
    

    let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));
    
    for (const iterator of sorted) {
        
        console.log(iterator);
    }

   

}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
  ]);