function race(input){

    let infoRacers = input.shift().split(', ');

    let finalRacers = {};

    let regex = /[A-Za-z]/g;
    let regxDigits = /\d/g;

    let line = input.shift();

    while(line != 'end of race'){

        let name = line.match(regex).join('');
        let ranNumber = line.match(regxDigits);
        let sum = 0;

        for (const num of ranNumber) {

            sum += Number(num);
        }

        if(infoRacers.includes(name)){

            if(finalRacers.hasOwnProperty(name)){

                let oldDistans = Number(finalRacers[name]);

                let distans = sum;

               let finalDistans = oldDistans + distans;

                finalRacers[name] = finalDistans;

            }else{

                let distans = sum;

                finalRacers[name] = distans;

            }
        }

        line = input.shift();
    }

    let entries = Object.entries(finalRacers);

    let sorted = entries.sort((a, b) => {

        return b[1] - a[1]});

   for (let i = 0; i < 3; i++) {

    if(i == 0){

        console.log(`1st place: ${sorted[i][0]}`);

    }else if(i == 1){

        console.log(`2nd place: ${sorted[i][0]}`);

    }else if(i == 2){

        console.log(`3rd place: ${sorted[i][0]}`);
    }
   }

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);