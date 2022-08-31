// import necessary modules
const ErrorResponse = require('../utilities/errorResponse');

errorHandler = (err, req, res, next) => {
    let err = { ...err };

    error.message = err.message;

    // log to console for dev
    console.log(`${err}\n${err.name}`);

    // mongoose bad ObjectId
    if(err.name === 'CastError') {
        const message = `Resource with id ${err.value} not found`;
        error = new ErrorResponse(message, 404);
    }

    // mongoose duplicate key
    if(err.code === 11000) {
        const message = `Duplicate field value entered ${err.value}`;
        error = new ErrorResponse(message, 400);
    }

    // mongoose validation error
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val=>val.message);
        error = new ErrorResponse(message, 400);
    }

    res
        .status(error.statusCode || 500)
        .json({ success: false, error: error.message || 'Server Error' });
}

module.exports = errorHandler;