const fs = require('fs');
const productsDb = require('../config/products.json');
const path = require('path');


class Model{

    save(){

        productsDb.push(this);

       return fs.writeFile(
            path.join(__dirname, '../config/products.json'),
            JSON.stringify(productsDb)
        )
    }

    static getAll(){
        return productsDb;
    }

    static getOne(id){
      return  productsDb.find(x => x.id == id);
    }
    
}


module.exports = Model;