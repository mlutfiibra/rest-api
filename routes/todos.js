const express = require('express');
const routes = express.Router();
const TodoController = require('../controllers/TodoController')
const authorize = require('../middlewares/authorize')

routes.get('/', TodoController.findAll);
routes.post('/', TodoController.create);
routes.get('/:id', authorize, TodoController.find)
routes.put('/:id', authorize, TodoController.updateAll)
routes.patch('/:id', authorize, TodoController.update)
routes.delete('/:id', authorize, TodoController.delete)

routes.get('*', (req, res) => {
    res.send('404 page not found')
})

module.exports = routes