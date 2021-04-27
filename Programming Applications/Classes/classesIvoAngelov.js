class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getFirstName() {
       return this.name.split(' ')[0]
    }

    static getPlanet() {
        return 'Earth'
    }
}

const person = new Person( 'Nikolay Nikolaev', 47 );

console.log(person.name);
console.log(person.age);
console.log(person.getFirstName());
console.log(Person.getPlanet());