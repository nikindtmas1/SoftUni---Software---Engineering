function demo(){

    let obj = {
        name: 'engineering',
        director: 'Ted Thomson',
        employeeCount: 25
    };

    let {name, employeeCount} = obj;

    console.log(name);
    console.log(employeeCount);
    
}
demo();