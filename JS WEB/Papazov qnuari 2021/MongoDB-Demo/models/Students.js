const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    facultyNumber: String,
    age: {type: Number}
});

module.exports = mongoose.Schema('Student', studentsSchema);