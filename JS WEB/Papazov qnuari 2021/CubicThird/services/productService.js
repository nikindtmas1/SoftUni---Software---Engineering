const Cube = require('../Models/cube');

async function getAll(query){

    let products = await Cube.find({}).lean();

    return products;

}

function create(data){
let cube = new Cube(data);

return cube.save();

}

async function getOne(id){
    let product = await Cube.findById(id).lean();
    return product;
}

module.exports = {

    getAll,
    create,
    getOne
}