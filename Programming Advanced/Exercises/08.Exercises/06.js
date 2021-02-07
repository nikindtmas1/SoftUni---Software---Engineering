class Company{
    constructor(){
        this.departments = [];
    }

    addEmployee(username, salary, position, department){
        //let info = [username,salary,position,department]
        if(!username || !salary || !position || !department || salary < 0){
            throw Error ('Invalid input!');
        }

        let newEmploy = {
            username:username, 
            salary:Number(salary), 
            position:position
        }

        if(!this.departments[department]){
            this.departments[department] = [];
        }

        this.departments[department].push(newEmploy);

        let message = `New employee is hired. Name: ${username}. Position: ${position}`;
        return message;
    }
    

    bestDepartment(){
        // let departments = ;
        let averageSalary = 0;
        let depName = '';

        Object.entries(this.departments)
       .forEach(([key, value]) => {
            let totalSalary = 0;
            let countar = 0;

          value.forEach((e) => {
            countar++;
              totalSalary += e.salary;
          });

          totalSalary = totalSalary / countar;
            
          if(totalSalary > averageSalary){
            averageSalary = totalSalary;
            depName = key;
        }
        });
       
      if(depName !== ''){
          let result = `Best Department is: ${depName}\nAverage salary: ${averageSalary.toFixed(2)}\n`;
      
          Object.values(this.departments[depName]).sort((a, b) => (b.salary) - (a.salary) ||
          a.username - b.username)
          .forEach((element) => {
              let currResult = `${element.username} ${element.salary} ${element.position}\n`
              result += currResult;
          });
          return result.trim();
        }
       

    }

    
}

let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());