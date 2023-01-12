const { Router } = require('express');

const FoodsController = require('../controllers/FoodsController');
const ensureIsAdmin = require('../middlewares/ensureIsAdmin');

const foodsRoutes = Router();
const foodsController = new FoodsController();

foodsRoutes.get('/', foodsController.index);
foodsRoutes.get('/:id', foodsController.show);
foodsRoutes.post('/', ensureIsAdmin, foodsController.create);
foodsRoutes.put('/:id', ensureIsAdmin, foodsController.update);
foodsRoutes.delete('/:id', ensureIsAdmin, foodsController.delete);

module.exports = foodsRoutes;