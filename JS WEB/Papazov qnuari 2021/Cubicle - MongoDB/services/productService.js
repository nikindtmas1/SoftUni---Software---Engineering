const Cube = require('../models/cubic');
//const uniqid = require('uniqid');
//const productData = require('../data/productData');
const Accessory = require('../models/Accessory');


async function getAll(query){

    //let products = productData.getAll();
    //let products = Cube.getAll();
    let products = await Cube.find({}).lean();

    if( query.search ){
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if(query.from){
        products = products.filter(x => Number(x.level) >= query.from)
    }

    if(query.to){
        products = products.filter(x => Number(x.level) <= query.to)
    }
    return products;
    
}

async function getOne(id){
    //return productData.getOne(id)
    //return Cube.getOne(id);
    let result =await Cube.findById(id).lean();
    return result;
}

function create(data){
    let cube = new Cube(data);

    return cube.save();

        //return productData.create(cube);

    // fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), (err) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    // });
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
    getOne,
    getOneWithAccessories,
    create,
    attachAccessory
}