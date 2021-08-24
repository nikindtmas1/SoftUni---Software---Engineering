const Accessory = require('../Models/accessory');


function createAccessory(data){

    let accessory = new Accessory(data);

    return accessory.save();
};

function getAllAccessories(){
    let accessories = Accessory.find({}).lean();

    return accessories;
};

function getOneAccessory(id){

    let accessory = Accessory.findById(id).lean();

    return accessory;
}


module.exports = {

    createAccessory,
    getAllAccessories,
    getOneAccessory,
    
}