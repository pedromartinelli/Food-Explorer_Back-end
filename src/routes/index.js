const { Router } = require('express');

const usersRoutes = require('./users.routes');
const foodsRoutes = require('./foods.routes');
const ordersRoutes = require('./orders.routes');
const sessionsRoutes = require('./sessions.routes');
const ordersEnrollmentRoutes = require('./orderEnrollment.routes');
// const ingredientsRoutes = require('./ingredients.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/foods', foodsRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/enrollment', ordersEnrollmentRoutes);
// routes.use('/ingredients', ingredientsRoutes);

module.exports = routes;