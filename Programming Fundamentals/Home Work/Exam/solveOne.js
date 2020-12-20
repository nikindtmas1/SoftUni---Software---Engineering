function solveOne(input){

let string = input.shift().toString();

let commands = input.shift();

while(commands != 'Finish'){

    [command, argOne, argTwo] = commands.split(' ');

    switch(command){

        case 'Replace':

        let currentChar = argOne;
        let newChar = argTwo;

        if(string.includes(currentChar)){

            while(string.includes(currentChar)){

                string = string.replace(currentChar, newChar);

            }
        }

        console.log(string);

        break;

        case 'Cut':

        let firstIndex = Number(argOne);
        let lastIndex = Number(argTwo);

        if((firstIndex >= 0 && firstIndex <= string.length - 1) 
        && (lastIndex >= 0 && lastIndex <= string.length - 1)){

            let firstPart = string.substring(0, firstIndex);
            let secondPart = string.substring(firstIndex, lastIndex + 1);
            let lastPart = string.substring(lastIndex + 1, string.length);

            string = firstPart + lastPart;

            console.log(string);

        }else{

            console.log(`Invalid indices!`);
        }

        break;

        case 'Make':

        let makeUpLow = argOne;

        if(makeUpLow == 'Upper'){

            string = string.toUpperCase();

        }else if(makeUpLow == 'Lower'){

            string = string.toLowerCase()
        }

        console.log(string);

        break;

        case 'Check':

        let check = argOne;

        if(string.includes(check)){

            console.log(`Message contains ${check}`);

        }else{

            console.log(`Message doesn't contain ${check}`);

        }

        break;

        case 'Sum':

        let startIndex = Number(argOne);
        let endIndex = Number(argTwo);
        let sum = 0;

        if((startIndex >= 0 && startIndex <= string.length - 1) 
        && (endIndex >= 0 && endIndex <= string.length - 1)){

            let substring = string.substring(startIndex, endIndex + 1);

            for(let i = 0; i < substring.length; i++){

                sum += substring.charCodeAt(i);

            }

            console.log(sum);

        }else{

            console.log(`Invalid indices!`);
        }

        break;
    }

    commands = input.shift();
}

}

solveOne([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
  ]);