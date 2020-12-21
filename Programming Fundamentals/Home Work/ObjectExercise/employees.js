function employees(input){

    let listEmployees = [];

    class Employees{

        constructor(name, length){

            this.name = name;
            this.length = length;

        }
    }

    for(let i = 0; i < input.length; i++){

        let currantEmploy = input[i].split(', ').toString();
        let lenthName = currantEmploy.length;

        listEmployees.push(new Employees(currantEmploy, lenthName))

    }
        
    

    listEmployees.forEach(i => {

        console.log(`Name: ${i.name} -- Personal Number: ${i.length}`);
        
    });

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ]);