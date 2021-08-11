const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017/testdb';
const Student = require('./models/Students');

mongoose.connect(connectStr, {useUnifiedTopology: true,  useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {console.log('Connected to data base')});

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({name: 'Stefan', age: 55});
// person.save((err, result) => {
//     if (err) return console.log(err);

//     console.log(result);
// });

let student = new Student({
    firstName:'Nikolay',
    lastName: 'Nikolaev',
    facultyNumber: '123456',
    age: 47
});

// studantsSchema.methods.getInfo = function(){
//     console.log(`Hello my name is ${this.firstName} and I'm ${this.age} years old!`);
// }

// Student.find()
// .then((student) => {
//     student.forEach(x => {
//         x.getInfo
//     });
// });

// student.save((err, result) => {
//     if (err) return console.log(err);

//     console.log(result);
// });

// Student.find()
// .then(res => {
//     console.log(res);
// })

// Student.findById('61126e3d440f781130145fe8')
// .then(res => {
//     console.log(res);
// });

// Student.updateOne({_id:'61126e3d440f781130145fe8'}, {$set: {lastName: 'Nikolaev', age: 45}})
// .then(res => {
//     console.log(res);
// })

Student.findById('61126e3d440f781130145fe8')
.then(res => {
    console.log(res);
});