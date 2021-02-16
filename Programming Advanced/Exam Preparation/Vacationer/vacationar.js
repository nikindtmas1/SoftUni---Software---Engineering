class Vacationer {
   constructor(fullName,creditCard){
       this.fullName = fullName;
       if(creditCard){
           this.creditCard = creditCard;
       }else{
           this.creditCard = [1111, "", 111];
       }
       generateIDNumber();
       this.wishList = [];
   }

//    get fullName(value){

//    }

//    set fullName(input){

//    }

//    generateIDNumber(){
//     let [firstName, secondName, lastName] = this.fullName;
//     return (firstName);
//    }


}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);
console.log(vacationer1);
// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


