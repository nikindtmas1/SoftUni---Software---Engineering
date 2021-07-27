const Cube = require('../models/cubic');
const uniqid = require('uniqid');
const fs = require('fs');
const productsData = require('../config/products.json');

function getAll(){
    return productsData;
}

function createProduct(data){
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
        );

        productsData.push(cube);

    fs.watchFile('../config/products.json', JSON.stringify(productsData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
}

module.exports = {
    create: createProduct
}