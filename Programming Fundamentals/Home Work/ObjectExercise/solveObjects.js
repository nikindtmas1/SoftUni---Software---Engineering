function solveObj(firstName, lastName, age){

    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    person.sayHello = () => console.log('Hi, guys!');
    console.log(person);

    let entries = Object.entries(person);

    console.log(entries);

    let keys = Object.keys(person);

    console.log(keys);

    for (const key of keys) {

        console.log(`${key}: ${person[key]}`);
        
    }

}

solveObj('Piter', 'Pan', 20);