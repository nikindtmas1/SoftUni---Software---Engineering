function storeProvi(inputArr1, inputArr2){

    let localStore = inputArr1.toString().split(',');
    let orderedProduct = inputArr2.toString().split(',');

    let i = 0;

    while( i < orderedProduct.length){

        let currantProduct = orderedProduct[i];

        let quantityProd = orderedProduct[i + 1];
        
        if(localStore.includes(currantProduct)){

            let productName = currantProduct;

            let index = localStore.indexOf(productName);

            let newQuantityPro = Number(localStore[index + 1]) + Number(quantityProd);

            localStore[index + 1] = newQuantityPro.toString();


        }else{
            
            localStore.push(currantProduct);
            localStore.push(quantityProd);

        }

        i+=2;
    }

   
    let storeObj = {};

   let index = 0;

    while( index < localStore.length){

        if(i % 2 == 0){

            let currantName = localStore[index];

            let currantQuantity = localStore[index + 1];
            storeObj[currantName] = currantQuantity;

        }

         index+=2;
    }

    for (const iterator in storeObj) {

        console.log(`${iterator} -> ${storeObj[iterator]}`);
        
    }
}

storeProvi([
    'Chips',    '5',
    'CocaCola', '9',
    'Bananas',  '14',
    'Pasta',    '4',
    'Beer',     '2'
  ], [
    'Flour',    '44',
    'Oil',      '12',
    'Pasta',    '7',
    'Tomatoes', '70',
    'Bananas',  '30'
  ]);