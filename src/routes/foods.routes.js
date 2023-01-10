const { Router } = require('express');

const FoodsController = require('../controllers/FoodsController');

const foodsRoutes = Router();
const foodsController = new FoodsController();

foodsRoutes.get('/', foodsController.index);
foodsRoutes.get('/:id', foodsController.show);
foodsRoutes.post('/', foodsController.create);
foodsRoutes.put('/:id', foodsController.update);
foodsRoutes.delete('/:id', foodsController.delete);

module.exports = foodsRoutes;