const Cat = require('../models/cat');

const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');

let filesData = require('../config/cats.json');

function addCat(data){

    let cat = new Cat(
        uniqid(),
        data.catId,
        data.name,
        data.description,
        data.breed
        );

    filesData.push(cat);

    fs.writeFile(path.join(__dirname, '/../config/cats.json'), JSON.stringify(filesData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    });

};


module.exports = {

    addCat
}