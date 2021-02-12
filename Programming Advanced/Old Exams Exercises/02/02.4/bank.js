class Bank{

    constructor (bankName){

        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer (customer){
    let  {firstName, lastName, personalId} = customer;
     if(this.allCustomers.find((x) => x.firstName === firstName)){
        throw new Error(`${firstName} ${lastName} is already our customer!`);
     }else{
         this.allCustomers.push(customer);
         return {firstName, lastName, personalId}
     }
    }

    depositMoney (personalId, amount){
        if(!this.allCustomers.find((x) => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
         }else{
             let totalMoney = 0;
            this.allCustomers.forEach((line) => {
                if(line.personalId === personalId){
                    if(line.totalMoney === undefined){
                        
                        line.totalMoney = amount;
                        totalMoney = amount;
                        line.transaction = [];
                        line.transaction.push(amount)
                    }else{

                        let oldMoney = line.totalMoney;
                        let newMoney = oldMoney + amount;
                        line.totalMoney = newMoney;
                        totalMoney = newMoney
                        line.transaction.push(amount)
                    }
               
                }
            });
            return `${totalMoney}$`;
           
         }
    }

    withdrawMoney (personalId, amount){
        if(!this.allCustomers.find((x) => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
         }else{
             let totalMoney = 0;
             this.allCustomers.forEach((line) => {
                 if(line.personalId === personalId){
                     if(line.totalMoney < amount){
                         throw new Error(`${line.firstName} ${line.lastName} does not have enough money to withdraw that amount!`);
                     }else{
                         let oldMoney = line.totalMoney;
                         let newMoney = oldMoney - amount;
                         line.totalMoney = newMoney;
                         totalMoney = newMoney;
                         line.transaction.push(-amount)
                     }
                    }
                });
                return `${totalMoney}$`;
         }
    }


    customerInfo (personalId){
        if(!this.allCustomers.find((x) => x.personalId === personalId)){
            throw new Error(`We have no customer with this ID!`);
         }else{
            let result = `Bank name: ${this._bankName}`
            this.allCustomers.forEach((line) => {
                if(line.personalId === personalId){
                  let arr =  line.transaction;
              result +=  `\nCustomer name: ${line.firstName} ${line.lastName}\nCustomer ID: ${line.personalId}\nTotal Money: ${line.totalMoney}$`+
              `\nTransactions:`
              for(let i = arr.length -1; i >= 0; i--){
                  if(arr[i] > 0){
                  result += `\n${i + 1}. ${line.firstName} ${line.lastName} made deposit of ${arr[i]}$!`
                  }else{
                    result += `\n${i + 1}. ${line.firstName} ${line.lastName} withdrew ${Math.abs(arr[i])}$!`
                  }
              }
                }
            })
           
            return result;
         }
        
    }


}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));