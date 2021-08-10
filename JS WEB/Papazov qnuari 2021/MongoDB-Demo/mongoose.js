const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017/testdb';
//const Student = require('./models/Students');

mongoose.connect(connectStr, {useUnifiedTopology: true,  useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log('Connected to data base')});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({name: 'Stefan', age: 55});
person.save((err, result) => {
    if (err) return console.log(err);

    console.log(result);
});

// let Student = new Student({
//     firstName:'Nikolay',
//     lastName: 'Nikolaew',
//     facultyNumber: '123456',
//     age: 47
// });

// student.save((err, result) => {
//     if (err) return console.log(err);

//     console.log(result);
// })