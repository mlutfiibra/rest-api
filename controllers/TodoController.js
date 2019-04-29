const { Todo } = require('../models')

class TodoController {
    static findAll(req, res) {
        Todo
        .findAll({where:{user_id:req.decoded.id}})
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static find(req, res) {
        Todo
        .findByPk(req.params.id)
        .then(todo=>{
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status(400).json({'msg': 'Bad request'})
        })
    }

    static create(req, res) {
        Todo
        .create({...req.body}, {'id':req.decoded.id})
        .then(todo=>{
            res.status(200).json(todo)            
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static delete(req, res) {
        Todo
        .destroy( {where:{id:req.params.id}} )
        .then(todo=>{
            res.status(200).json(todo)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static update(req, res) {
        Todo.findByPk(req.params.id)
        .then(todo=> {
            if(!todo) {
                res.status(400).json({'msg': 'Todo not found'})
            }
            todo.title = req.body.title

            return todo.save()
        })
        .then(todoUpdate=> {
            res.status(400).json(todoUpdate)
        })
        .catch(err => {
            res.status(500).json({
                'msg': 'Response error'
            })
        })
    }

    static update(req, res) {
        Todo.findByPk(req.params.id)
        .then(todo=> {
            if(!todo) {
                res.status(400).json({'msg': 'Todo not found'})
            }
            todo.title = req.body.title
            todo.description = req.body.description
            todo.user_id = req.body.user_id

            return todo.save()
        })
        .then(todoUpdate=> {
            res.status(400).json(todoUpdate)
        })
        .catch(err => {
            res.status(500).json({
                'msg': 'Response error'
            })
        })
    }
}

module.exports = TodoController
