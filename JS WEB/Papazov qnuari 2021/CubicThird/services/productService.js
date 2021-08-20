const Cube = require('./Models/cube');

async function getAll(query){

    let products = await Cube.find({}).lean();

    return products;

}

function create(data){
let cube = new Cube(data);

return cube.save();

}

module.exports = {

    getAll,
    create
}