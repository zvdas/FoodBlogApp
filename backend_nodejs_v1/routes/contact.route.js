// import necessary modules
const express = require('express');

const {
    getAllContacts,
    createContact
} = require('../controllers/contact.controller');

const router = express.Router();

router
    .route('/')
    .get(getAllContacts)
    .post(createContact);

module.exports = router;