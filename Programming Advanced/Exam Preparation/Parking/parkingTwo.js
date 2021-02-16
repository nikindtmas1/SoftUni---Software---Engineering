class Parking{
constructor(capacity){
    this.capacity = capacity;
    this.vehicles = [];

}

addCar(carModel, carNumber){
    if(this.capacity === 0){
        throw new Error('Not enough parking space.');
    }else{
        let car = {
            carModel,
            carNumber,
            payed: false
        }

        this.vehicles.push(car);
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;

    }
}

removeCar(carNumber){
    let index;
    if(!this.vehicles.find((x) => x.carNumber === carNumber)){
        throw new Error("The car, you're looking for, is not found.");
    }else{
        index = this.vehicles.findIndex((x) => x.carNumber === carNumber);
    }

    if(this.vehicles[index].payed === false){
        throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
    }

    this.vehicles.splice(index,1);
    this.capacity++;
    return `${carNumber} left the parking lot.`;
}

pay(carNumber){
    let index;
    if(!this.vehicles.find((x) => x.carNumber === carNumber)){
        throw new Error(`${carNumber} is not in the parking lot.`);
    }else{
        index = this.vehicles.findIndex((x) => x.carNumber === carNumber);
    }

    if(!this.vehicles[index].payed === false){
        throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    }

    this.vehicles[index].payed = true;
    return `${carNumber}'s driver successfully payed for his stay.`;
}

getStatistics(carNumber){
    if (!carNumber) {

        return[
            `The Parking Lot has ${this.capacity} empty spots left.`,
            this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel))
            .map(x => `${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`)
            .join('\n')
        ].join('\n');
    }
    
    let car = this.vehicles.find((x) => x.carNumber === carNumber)
    return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`

}
}

const parking = new Parking(12);
console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.addCar('Opel Astra', 'TX3791BA'));
console.log(parking.addCar('BMV', 'CA3491CA'));
console.log(parking.getStatistics());
console.log(parking.pay('TX3691CA'));
console.log(parking.removeCar('TX3691CA'));