function getPersons(input){

let output = []
class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }
   
    
}

let person = new Person(input);
output.push(person);
}
getPersons('Anna', 'Simpson', 22, 'anna@yahoo.com')
getPersons('SoftUni')
getPersons('Stephan', 'Johnson', 25)
getPersons('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
// let person2 = new Person('SoftUni');
// let person3 = new Person('Stephan', 'Johnson', 25);
// let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
