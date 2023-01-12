const { Router } = require('express');

const OrdersController = require('../controllers/OrdersController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ensureIsAdmin = require('../middlewares/ensureIsAdmin');

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.post('/', ensureAuthenticated, ordersController.create);
ordersRoutes.put('/:id', ensureIsAdmin, ordersController.update);

module.exports = ordersRoutes;