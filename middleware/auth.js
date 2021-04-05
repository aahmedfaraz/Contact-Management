const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get the token form the Header
    const token = req.header('x-auth-token');
    // If the token does not exist - 401 - Authorization Denied
    if(!token) return res.status(401).json({msg: 'Authorization Denied, token is missing'});
    // verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Invalid Token'});
    }
}