const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017/testdb';

mongoose.connect(connectStr, {useUnifiedTopology: true,  useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log('Connected to data base')});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({name: 'Stamat', age: 25});
person.save((err, result) => {
    if (err) return console.log(err);

    console.log(result);
});