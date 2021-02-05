function ticketsSort(array, criterion){

class Ticket{
    constructor(destinationName, price, status){
        this.destinationName = destinationName;
        this.price = price;
        this.status = status;
    }
}

let coppyArr = array.slice();
let output = [];

for(let i = 0; i < coppyArr.length; i++){
    let currDate = coppyArr[i].split('|');
    let name = currDate[0];
    let money = Number(currDate[1]);
    let stat = currDate[2];
    let myDestination = new Ticket(name, money, stat);
    output.push(myDestination);
}



if(criterion === 'destination'){
    
   output.sort((a, b) => (a.destinationName).localeCompare(b.destinationName));

}else if (criterion === 'status'){
    output.sort((a, b) => (a.status).localeCompare(b.status))
}else if(criterion === 'price'){
 output.sort((a, b) => (a.price) - (b.price));
}

return output;

}
ticketsSort(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');