// import necessary modules
const mongoose = require('mongoose');

// define blog schema
const BlogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Please enter the date']
    },
    title: {
        type: String,
        required: [true, 'Please enter the title']
    },
    author: {
        type: String,
        required: [true, 'Please enter the authors name']
    },
    message: {
        type: String,
    },
    category: {
        type: String,
        required: [true, 'Please enter the category name']
    }
})

module.exports = mongoose.model('Blog', BlogSchema);