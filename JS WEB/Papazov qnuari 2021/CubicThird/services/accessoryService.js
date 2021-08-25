const Accessory = require('../Models/accessory');


function createAccessory(data){

    let accessory = new Accessory(data);

    return accessory.save();
};

function getAllAccessories(){
    let accessories = Accessory.find({}).lean();

    return accessories;
};

function getAllWithouth(ids){
    return Accessory.find({ _id: {$nin: ids}}).lean();
}

function getOneAccessory(id){

    let accessory = Accessory.findById(id).lean();

    return accessory;
}


module.exports = {

    createAccessory,
    getAllAccessories,
    getOneAccessory,
    
}