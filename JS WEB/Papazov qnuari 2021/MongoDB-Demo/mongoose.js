const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017';

mongoose.connect(connectStr, {useUnifiedTopology: true,  useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log('Connected to data base')});