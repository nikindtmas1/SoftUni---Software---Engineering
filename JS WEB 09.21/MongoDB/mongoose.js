const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    facultyNumber: String,
    age: Number
});

studentSchema.methods.getInfo = function() {
    return `I'm ${this.firstName} and I'm ${this.age} years old`
}

const Student = mongoose.model('Student', studentSchema);

const myPerson = new Student({
    firstName: "Toma",
    lastName: "Bikov",
    facultyNumber: "56789",
    age: 55
})

async function main(){
    
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Data base connected');

    //await myPerson.save();

    const data = await Student.find({});

    //console.log(data);
    

    data.forEach((x) => console.log(x.getInfo()));
};

main()
