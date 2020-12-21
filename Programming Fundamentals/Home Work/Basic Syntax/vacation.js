function solveVacantion(agr1, arg2, arg3){

    let quantity = agr1;
    let typeGroup = arg2;
    let typeDay = arg3;

    let price = 0;
    let finalPrice = 0;
    let totalPrice = 0;

    if(typeGroup === 'Students'){
        switch(typeDay){
            case'Friday': price = 8.45; break;
            case'Saturday': price = 9.80; break;
            case'Sunday': price = 10.46; break;
        }

        if(quantity >= 30){

            finalPrice = price * quantity;
            totalPrice = finalPrice - (finalPrice * 0.15);
        }else{

            finalPrice = price * quantity;
            totalPrice = finalPrice;
        }

    }else if(typeGroup === 'Business'){
        switch(typeDay){
            case'Friday': price = 10.90; break;
            case'Saturday': price = 15.60; break;
            case'Sunday': price = 16; break;
        }

        if(quantity >= 100){

            let newQuantity = quantity - 10;
            finalPrice = newQuantity * price;
            totalPrice = finalPrice;

        }else{

            finalPrice = quantity * price;
            totalPrice = finalPrice;
        }

    }else if(typeGroup === 'Regular'){
        switch(typeDay){
            case'Friday': price = 15; break;
            case'Saturday': price = 20; break;
            case'Sunday': price = 22.50; break;
        }

        if(quantity >= 10 && quantity <= 20){

            finalPrice = quantity * price;
            totalPrice = finalPrice - (finalPrice * 0.05);
    
        }else{
    
            finalPrice = quantity * price;
            totalPrice = finalPrice;
    
        }
    }
    
    
console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}