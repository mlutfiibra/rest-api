const express = require('express');
const routes = express.Router();
const users = require('./users')
const todos = require('./todos')
const UserController = require('../controllers/UserController')
const authenticate = require('../middlewares/authenticate')

routes.post('/signup', UserController.create)
routes.post('/signin', UserController.signin)

routes.use('/users', users)
routes.use('/todos', authenticate, todos)

module.exports = routes