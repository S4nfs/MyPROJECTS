const mongoose = require('mongoose');
const validator = require('validator');

//Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        requires: true,
        unique: [true, "Email ID already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    }, phone: {
        type: Number,
        min:10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

//Model
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;
