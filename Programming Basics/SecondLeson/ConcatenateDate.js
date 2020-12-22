// Това е верния код!!!!!
function concatenateData(fName,lName,sAge,incomTown){
    let firstName = fName;
    let lastName = lName;
    let age = Number(sAge);
    let town = incomTown;

    
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData("Nikolai", "Nikolaev", "42", "Varna");
//console.log("You are " + firstName + " " + lastName + "," + " a " + age + "-years old person from " + town + ".");


function printInfo([arg1, arg2, arg3, arg4]){
let firsthName = arg1;
let lastName = arg2;
let age = parseInt(arg3);
let town = arg4;

console.log(`You are ${firsthName} ${lastName}, a ${age} - years old person from ${town}.`);
}
printInfo(["Nikolai", "Nikolaev", 46, "Varna"]);
//Не бива да ползваме [] скоби за сега!!!!!!!
function infoToMe([firsthName, lastName, age, town]){
    console.log(`You are ${firsthName} ${lastName}, a ${age} - years old person from ${town}.`);
}
infoToMe(["Николай","Николаев",46,"Варна"]);
//
function calculate(arg1){
    let a = parseInt(arg1);
    console.log(`${a} + ${a} = ${a + a}`);
}
calculate(1);
//
function printInfoToMy(){
    let firsthName = "Maria";
    let lastName = "Ivanova";
    let age = 19;
    let town = "Pleven";

    console.log(`You are ${firsthName} ${lastName}, a ${age}-years old person from ${town}.`);

}
printInfoToMy();
//
function printInfoToMy(){
    let firsthName = "Maria";
    let lastName = "Ivanova";
    let age = "19";
    let town = "Pleven";

    console.log("You are " + firsthName + " " + lastName +"," + " a " + age + "-years older person from " + town + "." );

}
printInfoToMy();
//

