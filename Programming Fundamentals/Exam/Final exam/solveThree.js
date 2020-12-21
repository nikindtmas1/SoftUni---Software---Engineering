function solveThree(input){

    let commands = input.shift();

    let people = {};

    while(commands != 'Results'){

        [command, argOne, argTwo, argThree] = commands.split(':');

        switch(command){

            case 'Add':

            let name = argOne;
            let health = Number(argTwo);
            let energy = Number(argThree);

            if(people.hasOwnProperty(name)){

                let haveHealth = people[name].health;
                let newHealth = haveHealth + health;

                people[name].health = newHealth;

            }else{

                people[name] = {health, energy};

            }


            break;

            case 'Attack':

            let attName = argOne;
            let defName = argTwo;
            let damage = Number(argThree);

            if(people.hasOwnProperty(attName) && people.hasOwnProperty(defName)){

                let defHealt = people[defName].health;
                let newDefHealth = defHealt - damage;

                people[defName].health = newDefHealth;

                if(newDefHealth <= 0){

                    delete people[defName];

                    console.log(`${defName} was disqualified!`);
                }

                let attEnergy = people[attName].energy;
                let newAttEnergy = attEnergy - 1;

                people[attName].energy = newAttEnergy;

                if(newAttEnergy <= 0){

                    delete people[attName];

                    console.log(`${attName} was disqualified!`);
                }

            }

            break;

            case 'Delete':

            let userName = argOne;

            if(userName != 'All'){

                if(people.hasOwnProperty(userName)){

                    delete people[userName];

                }

            }else{

                for (const key of Object.keys(people)) {
                    
                    delete people[key];

                }

            }

            break;
        }

        commands = input.shift();
    }

    let entries = Object.entries(people);

    console.log(`People count: ${entries.length}`);

    let sorted = entries.sort((a, b) => {

        if(b[1].health == a[1].health){

            return a[0].localeCompare(b[0]);

        }else{

            return b[1].health - a[1].health;

        }

    });

    for (const kvp of sorted) {

        console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy}`);
        
    }

}

solveThree([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
  ]);