function animalType(animal) {
    switch (animal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'snake':
        case 'crocodile':
        case 'tortoise':
            console.log('reptile');
            break;
        case 'cat':
            console.log('unknown');
            break;
    }
}
animalType('cat');