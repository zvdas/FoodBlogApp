// @desc logs requests to console
const logger = (req, res, next) => {
    console.log(`REQUEST: ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// export logger module
module.exports = logger;