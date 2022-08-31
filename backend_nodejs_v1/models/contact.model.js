// import necessary modules
const mongoose = require('mongoose');

// define blog schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name']
    },
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please enter the password']
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: [true, 'Please enter a phone number']
    },
    address_line_1: {
        type: String
    },
    address_line_2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    zip: {
        type: Number,
        minlength: 5,
        maxlength: 6
    }
})

module.exports = mongoose.model('Contact', ContactSchema);