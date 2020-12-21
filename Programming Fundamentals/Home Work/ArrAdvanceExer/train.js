function train(inputArr) {

    let wagons = inputArr[0].split(' ').map(Number);
    let maxCapacity = Number(inputArr[1]);
    let commands = inputArr.slice(2);

    for (let i = 0; i < commands.length; i++) {

        let element = commands[i].split(' ');
        [command, passengers] = element;

        if (command == 'Add') {

            wagons.push(Number(passengers));

        } else {

            for (let i = 0; i < wagons.length; i++) {

                let el = wagons[i];

                if ((el + Number(command)) <= maxCapacity) {

                    wagons.splice(i, 1, el + Number(command));
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train([ '32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75' ]);