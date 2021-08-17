const mongoose = require('mongoose');

module.exports = (app) => {
    
    mongoose.connect('mongodb://localhost:27017/cubicle', {useNewUrlParser: true, useUnifiedTopology: true});
    //mongoose.connect("mongodb://cluster0-shard-00-00.3bvrs.mongodb.net:27017,cluster0-shard-00-01.3bvrs.mongodb.net:27017,cluster0-shard-00-02.3bvrs.mongodb.net:27017/Cubics?replicaSet=atlas-tekw8p-shard-0 --ssl --authenticationDatabase admin --username nikindtmas --password niki548444", {useNewUrlParser: true, useUnifiedTopology: true});
    //mongoose.connect("mongodb://cluster0-shard-00-00.3bvrs.mongodb.net:27017,cluster0-shard-00-01.3bvrs.mongodb.net:27017,cluster0-shard-00-02.3bvrs.mongodb.net:27017/Cubics?replicaSet=atlas-tekw8p-shard-0", { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error:'));
    db.once('open', function(){
        console.log('db connected');
    })
}