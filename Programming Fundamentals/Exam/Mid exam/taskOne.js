function solveTaskOne(input){

    let countOrders = input.shift();

    let totalPrice = 0;

    while(countOrders > 0){

        countOrders--;

        let priceCapsule = input.shift();
        let days = input.shift();
        let capsulesCount = input.shift();
        
        let orderPrice = ((days * capsulesCount) * priceCapsule);

        totalPrice += orderPrice;
        
        console.log(`The price for the coffee is: $${orderPrice.toFixed(2)}`);
    }
    
    console.log(`Total: $${totalPrice.toFixed(2)}`);

}
solveTaskOne([ 2, 4.99, 31, 3, 0.35, 31, 5 ]);