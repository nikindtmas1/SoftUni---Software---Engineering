const mongoose = require('mongoose');

module.exports = (app) => {
    
    //mongoose.connect('mongodb://localhost:27017/cubicle', {useNewUrlParser: true, useUnifiedTopology: true});
    switch (process.env.NODE_ENV.trim()) {
        case 'production':
            mongoose.connect('mongodb+srv://cluster0.3bvrs.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, tls: true, tlsCertificateKeyFile: './X509-cert-5779710120689814657.pem'});
        default:
            mongoose.connect(`mongodb+srv://nikindtmas:niki548444@cluster0.3bvrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true, auth: {user: 'nikindtmas', password: 'niki548444'}});
    }

    const db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error:'));
    db.once('open', function(){
        console.log('db connected');
    })
}