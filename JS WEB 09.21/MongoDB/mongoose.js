const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Data base connected');
};

main();