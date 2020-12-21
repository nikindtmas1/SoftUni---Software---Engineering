function solveTaskTwo(input) {

    let allFriends = input.shift().split(', ');

    let commands = input.shift();

    let countBlackListed = 0;
    let countLosted = 0;

    while (commands != 'Report') {

        commands = commands.split(' ');

        [command, item1, item2] = commands;

        if (command == 'Blacklist') {

            let name = item1;

            let countar = 0;
            for (let i = 0; i < allFriends.length; i++) {

                let currantName = allFriends[i];

                if (currantName == name) {

                    allFriends[i] = 'Blacklisted';

                    countar++;

                    console.log(`${name} was blacklisted.`);

                    break;

                }

            }

            if (countar == 0) {

                console.log(`${name} was not found.`);

            }
        } else if (command == 'Error') {

            let index = Number(item1);

            let currantName = allFriends[index];

            if (currantName != 'Blacklisted' && currantName != 'Lost') {

                let newName = 'Lost';

                allFriends[index] = newName;

                console.log(`${currantName} was lost due to an error.`);


            }
        } else if (command == 'Change') {

            let index = Number(item1);
            let newName = item2;

            if (index >= 0 && index <= allFriends.length - 1) {

                let currantName = allFriends[index];

                allFriends[index] = newName;

                console.log(`${currantName} changed his username to ${newName}.`);

            }
        }

        commands = input.shift();
    }

    for (const iterator of allFriends) {

        if (iterator == 'Blacklisted') {

            countBlackListed++;

        } else if (iterator == 'Lost') {

            countLosted++;
        }

    }

    console.log(`Blacklisted names: ${countBlackListed}`);
    console.log(`Lost names: ${countLosted}`);
    console.log(allFriends.join(' '));

}
solveTaskTwo([
    'Mike, John, Eddie, William',
    'Blacklist Mike',
    'Error 1',
    'Blacklist Eddie',
    'Error 3',
    'Report'
  ]);