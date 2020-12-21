function solveTwo(input){

   let countMassages = Number(input.shift());
   
   for(let i = 0; i < countMassages; i++){

       let criptMessage = input.shift();

       let pattern = /(!)(?<command>[A-Z][a-z]{2,})\1:\[(?<message>[A-Za-z]{8,})\]/g;

       let regex = pattern.exec(criptMessage);

       let match = criptMessage.match(pattern);

       let output = [];

       if(match != null){

        let currentMessage = regex.groups.message;

        for(let i = 0; i < currentMessage.length; i++){

            let code = currentMessage.charCodeAt(i);

            if(code >= 65 && code <= 90 || code >= 97 && code <= 122){

                output.push(code);

            }
        }

        console.log(`${regex.groups.command}: ${output.join(' ')}`);

       }else{

        console.log(`The message is invalid`);

       }

   }

}

solveTwo([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ]);