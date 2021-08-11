const mongoose = require('mongoose');
const cubeSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: String,
    imageUrl: String,
    difficultyLevel: Number
})

class Cube {
    constructor(id, name, description, imageUrl, level){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.level = level;
    }

}

module.exports = Cube;