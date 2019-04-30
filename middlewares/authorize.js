const { Todo } = require('../models')

module.exports = (err, req, res, next) => {
    if(req.headers.hasOwnProperty('token')) {
        Todo.findOne({where:{id:req.params.id}})
        .then((todo) => {
            if(todo) {
                if(todo.user_id===req.decoded.id) {
                    next()
                }else{
                    res.status(400).json([])
                }
            }
        })
        .catch(err => {
            // console.log(err);       
            res.status(500).json({'msg': 'Request error'})
        })
    }else {
        res.status(400).json({'msg': 'Not authorize'})
    }
}