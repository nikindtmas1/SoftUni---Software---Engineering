function cats(input){

    let cats = [];

    class Cats{

        constructor(name, age){

            this.name = name;
            this.age = age;

            this.speak = () => {

                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
    }

 for(let i = 0; i < input.length; i++){

    [name, age] = input[i].split(' ');

    cats.push(new Cats(name, age));
 }

 for (const cat of cats) {

    cat.speak();
     
 }
}

cats([ 'Mellow 2', 'Tom 5' ]);