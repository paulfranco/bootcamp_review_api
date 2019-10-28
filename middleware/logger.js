@desc   Logs request to console
const logger = (req, res, next) {
    console.log(
        `${req.mothod} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next();
};

module.exports = logger;