function fruitOrVege(input) {
    let producte = input;

    if (producte == 'banana' || producte == 'apple' || producte == 'kiwi'
        || producte == 'cherry' || producte == 'lemon' || producte == 'grapes') {

        console.log('fruit');

    } else if (producte == 'tomato' || producte == 'cucumber' || producte == 'pepper'
        || producte == 'carrot') {

        console.log('vegetable');
    } else {
        console.log('unknown');
    }

}
fruitOrVege('water');