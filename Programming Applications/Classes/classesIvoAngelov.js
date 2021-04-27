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

// const person = new Person( 'Nikolay Nikolaev', 47 );

// console.log(person.name);
// console.log(person.age);
// console.log(person.getFirstName());
// console.log(Person.getPlanet());

class Students extends Person {
    constructor( name, age, university) {
        super( name, age )
        this.university = university
    }

    getUniversity(){
        return 'My university is ' + this.university
    }
}

const student = new Students ( 'Nikolay Nikolaev', 47, 'Varna University')

console.log(student.getUniversity());