// install necessary modules
const Contact = require('../models/contact.model');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');

// @desc    Get all contacts
// @route   GET /api/v1/contacts
// @access  Public
exports.getAllContacts = asyncHandler(async(req, res, next) => {
    const contact = await Contact.find();

    if(!contact) 
        return next(new ErrorResponse(`Contacts not found`, 404));
    

    res
        .status(200)
        .json({ success: true, count: contact.length, data: contact });
});

// @desc    Create a new contact
// @route   POST /api/v1/contacts
// @access  Public
exports.createContact = asyncHandler(async(req, res, next) => {
    const contact = await Contact.create(req.body);

    if(!contact) 
        return next(new ErrorResponse(`Contact with id '${req.params.id}' not found`, 400));
    

    res
        .status(201)
        .json({ success: true, message: 'Contact created successfully', data: contact });
});