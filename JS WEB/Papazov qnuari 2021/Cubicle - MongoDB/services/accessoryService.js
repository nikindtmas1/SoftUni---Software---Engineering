const Accessory = require('../models/Accessory');

function createAccessory(data){
    let accessory = new Accessory(data);
}

module.exports = {
    createAccessory
}