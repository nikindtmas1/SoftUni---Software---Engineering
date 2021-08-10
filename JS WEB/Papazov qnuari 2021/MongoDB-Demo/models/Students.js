const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    facultyNumber: String,
    age: Number
});

module.exports = mongoose.model('Student', studentsSchema);