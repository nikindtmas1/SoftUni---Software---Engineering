const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost:27017/cubicle', {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(){
        console.log('db connected');
    })
}