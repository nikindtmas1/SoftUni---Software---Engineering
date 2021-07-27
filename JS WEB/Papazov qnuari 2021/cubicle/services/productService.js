const Cube = require('../models/cubic');
const uniqid = require('uniqid');
const fs = require('fs');

function createProduct(data){
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
        );

    fs.watchFile('../config/products.json');
}

module.exports = {
    create: createProduct
}