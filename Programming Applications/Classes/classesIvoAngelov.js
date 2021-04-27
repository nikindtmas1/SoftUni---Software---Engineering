class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get firstName() {
       return this.name.split(' ')[0]
    }
}

const person = new Person( 'Nikolay Nikolaev', 47 );

console.log(person.name);
console.log(person.age);
console.log(person.firstName);