const Cube = require('../Models/cube');
const Accessory = require('../Models/accessory');

async function getAll(query){

    let products = await Cube.find({}).lean();

    if(query.search){
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    };

    if(query.from){
        products = products.filter(x => Number(x.level) >= query.from);
    };

    if(query.to){
        products = products.filter(x => Number(x.level) <= query.to);
    };

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


async function attachAccessory(productId, accessoryId){
    let product = await Cube.findById(productId);
    let accessory = await Accessory.findById(accessoryId);
 
    product.accessories.push(accessory);
 
    return product.save();
 }

 function getOneWithAccessories(id){
    return Cube.findById(id).populate('accessories').lean();
}

module.exports = {

    getAll,
    create,
    getOne,
    attachAccessory,
    getOneWithAccessories
}