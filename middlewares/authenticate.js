const Helper = require('../helpers/helper')

module.exports = (req, res, next) => {
    try {
        var decoded = Helper.verifyJWT(req.headers.token);
        req.decoded = decoded
        next()
    } catch(err) {
        res.status(400).json({'msg': 'User not authenticate'})
    }  
}