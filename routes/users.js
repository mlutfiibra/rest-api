const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController')

routes.get('/', UserController.findAll);
routes.post('/', UserController.create)
routes.get('/:id', UserController.findByPk)
routes.put('/:id', UserController.update)
routes.delete('/:id', UserController.delete)

routes.get('*', (req, res) => {
    res.send('404 page not found')
})

module.exports = routes