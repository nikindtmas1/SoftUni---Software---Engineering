function arrayManipulator(inputArrIntegers, inputArrCommands){

    let arrManipulation = inputArrIntegers.slice();

    let commandLength = inputArrCommands.length;

    for(let i = 0; i < commandLength; i++){

        let commandsElements = inputArrCommands[i].split(' ');

        [command, index, element] = commandsElements;

        if(command == 'add'){

            addNumbers(index, element);

        }

        if(command == 'contains'){

            let numIndex = Number(index);
            
            conteinsElement(numIndex);
        }

        if(command == 'addMany'){

            addManyNumbers(i);
        }

        if( command == 'remove'){

            removeElement(index);
        }

        if(command == 'shift'){

            shiftElement(index);

        }

        if(command == 'sumPairs'){

            sumPairsElements(arrManipulation);

        }

        if(command == 'print'){

            printResult();

            break;
        }
    }

    function addNumbers(numberIndex, numElement){

        let indexNum = Number(numberIndex);

        let numberElement = Number(numElement);

        arrManipulation.splice(indexNum, 0, numberElement);

        return arrManipulation;
    }
    //sequinsElements => string
    function addManyNumbers(numberIndex){

        let elements = inputArrCommands[numberIndex].slice(1);

        //[command, sequinsElements] = elements;

        let currantSequins = elements.split(' ').map(Number);

        let currantIndex = currantSequins[1];

        let newSequins = currantSequins.slice(2);

        let length = newSequins.length;

        let index = 0;
        while(index < length){

            arrManipulation.splice(currantIndex, 0, newSequins[index]);
            currantIndex++;
            index++;

        }
        

       return arrManipulation;
    }
    
    function conteinsElement(number){

        return arrManipulation.indexOf(number);

    }


    function removeElement(number){

        let index = number;

        arrManipulation.splice(index, 1);

        return arrManipulation;

    }

    function shiftElement(number){

        for(let i = 0; i < number; i++){

           let number = arrManipulation.shift();
           arrManipulation.push(number);
        }

        return arrManipulation;
    }
    
    function sumPairsElements(arr){

            let index = 0;

            let newArr = [];

            while(index <= arr.length){

                let numbers = arr.slice(0, 2);

                [num1, num2] = numbers;

                let sum = Number(num1) + Number(num2);

                newArr.push(sum + '');

                arr = arr.slice(2);

                index++;
            }
        return newArr;

    }

    function printResult(){
    
        console.log(arrManipulation);
    }
}

arrayManipulator([ 1, 2, 3, 4, 5 ], [
    'addMany 5 9 8 7 6 5',
    'contains 15',
    'remove 3',
    'shift 1',
    'print'
  ]);