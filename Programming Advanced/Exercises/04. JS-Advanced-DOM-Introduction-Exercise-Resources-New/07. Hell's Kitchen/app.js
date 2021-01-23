function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const body = document.querySelector('tbody');
   let input = document.querySelector('#searchField');
   const bestResturantP = document.querySelector('#bestRestaurant>p');
   const workarsP = document.querySelector('#workers>p');

   function onClick () {
     let arr = JSON.parse(input.value);

     let restourants = {};
      
     arr.forEach(line => {
        const tokens = line.split(' - ');

        const name = tokens[0];
        const workersArr = tokens[1].split(', ');
      let workars = [];
      let averageSalary = 0;
      let bestSalary = 0;

      for (const workar of workersArr) {
         let workarTokens = worker.split(' ');
         const salary = Number(workarTokens[1])
         workars.push({
            name: workarTokens[0],
            salary
         })
      }

      if(restourants[name]){
         workars.concat(restourants[name].workars)

      }

         workars.sort((workar1, workar2) => workar2.salary - workar1.salary)

         let bestSalary = workars[0].salary;
         averageSalary = workars.reduce((sum, workar) => sum + workar.salary, 0) / workars.length;


      restourants[name] = {
         workars,
         averageSalary,
         bestSalary
      }
  
     });

     let bestRestorantSalary = 0;
     let bestRestorant = undefined;
     for (const name in restourants) {
      
      if(restourants[name].averageSalary > bestRestorantSalary){
         bestRestorant = {name, ...restourants[name],
            bestSalary: restourants[name].bestSalary,
            averageSalary: restourants[name].averageSalary
         }

         bestRestorantSalary = restourants[name].averageSalary
      }
     }

     bestResturantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} 
     Best Salary: ${best.bestSalary.toFixed(2)}`

     let workarsresult = [];

     best.workars.forEach()
   }
}