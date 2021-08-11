const fs = require('fs');
const productsDb = require('../config/products.json');
const path = require('path');

module.exports = {
    getAll(){
        return productsDb;
    },

    getOne(id){
        return productsDb.find(x => x.id == id);
    },

    create(product){

        productsDb.push(product);

       return fs.writeFile(
            path.join(__dirname, '../config/products.json'),
            JSON.stringify(productsDb)
        )
    }
}