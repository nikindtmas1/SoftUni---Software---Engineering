function houseParty(inputArr) {

    let guests = inputArr;
    let listGuests = [];

    for (let i = 0; i < guests.length; i++) {

        let items = guests[i].split(' ');

        [name, is, not, going] = items;

        if (listGuests.includes(name)) {

            if (not == 'not') {

                for (let i = 0; i < listGuests.length; i++) {

                    let deleteName = listGuests[i];
                    
                    if (deleteName == name) {

                        listGuests.splice(i, 1);
                    }
                }


            } else {

                console.log(`${name} is already in the list!`);
            }

        } else {

            if (not == 'not') {

                console.log(`${name} is not in the list!`);

            } else {

                listGuests.push(name);

            }

        }

    }

    console.log(listGuests.join('\n'));
}

houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'
]);