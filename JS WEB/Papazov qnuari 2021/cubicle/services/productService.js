const Cube = require('../models/cubic');
const uniqid = require('uniqid');

function createProduct(data){
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
        );

    
}

module.exports = {
    create: createProduct
}