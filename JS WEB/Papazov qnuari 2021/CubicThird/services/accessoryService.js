const Accessory = require('../Models/accessory');


function createAccessory(data){

    let accessory = new Accessory(data);

    return accessory.save();
};

async function getAllAccessories(){
    let accessories = await Accessory.find({}).lean();

    return accessories;
};

async function getOneAccessory(id){

    let accessory = await Accessory.findById(id).lean();

    return accessory;
}


module.exports = {

    createAccessory,
    getAllAccessories,
    getOneAccessory,
    
}