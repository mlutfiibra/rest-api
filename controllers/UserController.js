const { User } = require('../models')
const Helper = require('../helpers/helper')

class UserController {
    static findAll(req, res) {
        User
        .findAll()
        .then(users=>{
            res.status(201).json(users)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static findByPk(req, res) {
        User
        .findByPk(req.params.id)
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static create(req, res) {
        User
        .create({...req.body})
        .then(user=>{
            res.status(200).json(user)            
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static delete(req, res) {
        User
        .destroy( {where:{id:req.params.id}} )
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static update(req, res) {
        User.findByPk(req.params.id)
        .then(user=> {
            if(!user) {
                res.status(400).json({'msg': 'User not found'})
            }
            user.username = req.body.username

            return user.save()
        })
        .then(userUpdate=> {
            res.status(200).json(userUpdate)
        })
        .catch(err => {
            res.status(500).json({
                'msg': 'Response error'
            })
        })
    }

    static signin(req, res) {
        const {username, password} = req.body

        User.findOne( { where:{username} })
        .then(user => {
            if(!user) {
                res.status(400).json({'msg': 'username/password wrong'})
            }else if(!Helper.comparePassword(password, user.password)) {
                res.status(400).json({'msg': 'username/password wrong'})
            }else {
                const userPayload = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }

                const token = Helper.generateJWT(userPayload);

                res.status(200).json({token})
            }

        })
        .catch(err => {
            res.status(500).json({'msg': 'username/password wrong'})
        })
    }
}

module.exports = UserController
