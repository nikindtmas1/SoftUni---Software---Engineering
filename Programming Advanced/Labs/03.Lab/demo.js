function demo(){

    let obj = {
        name: 'engineering',
        director: 'Ted Thomson',
        employeeCount: 25,
        age: function(arg){
           return `My age is ${arg}`;
        }
    };

    console.log(obj.age(46));
    
    let {name, employeeCount} = obj;

    console.log(name);
    console.log(employeeCount);
    
}
demo();