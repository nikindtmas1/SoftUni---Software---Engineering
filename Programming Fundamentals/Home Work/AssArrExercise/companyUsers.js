function companyUsers(inputArr){

    let orderList = {};

    for (const line of inputArr) {

        [company, employ] = line.split(' -> ');

        if(!orderList.hasOwnProperty(company)){

            orderList[company] = [];

            orderList[company].push(employ);

        }else{

            if(!orderList[company].includes(employ)){

                orderList[company].push(employ);

            }

        }
        
    }

   let sorted = Object.entries(orderList)
   .sort((a, b) => a[0].localeCompare(b[0]));

   for (const line of sorted) {

    console.log(`${line[0]}`);
    
    for (const iterator of line[1]) {
        
        console.log(` -- ${iterator}`);

    }
             
   }

}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345'
]);