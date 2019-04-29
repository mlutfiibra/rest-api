const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
    console.log(req.headers.token);
        var decoded = jwt.verify(req.headers.token, process.env.SECRET);
        req.decoded = decoded
        next()
    } catch(err) {
        res.status(400).json({'msg': 'User not authenticate'})
    }  
}