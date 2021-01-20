function lowestPrices(input){

    let arrInput = [...input];
    let storeDate = {};

    for(let i = 0; i < arrInput.length; i++){

        let townDate = arrInput[i].split(' | ');

        [townName, productName, productPrice] = townDate;
        
       if(!storeDate[productName]){

        storeDate[productName] = {townName, productPrice: Number(productPrice)};

       }else{

        storeDate[productName] = storeDate[productName].productPrice <= 
        Number(productPrice) ? storeDate[productName] 
        : {townName, productPrice: Number(productPrice)};

       }
      

    }

    let result = [];
    for (const productName in storeDate) {
        result.push(`${productName} -> ${storeDate[productName].productPrice} (${storeDate[productName].townName})`);
    }

   return result.join('\n');
}

console.log(lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
  ]));
