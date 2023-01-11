const { Router } = require('express');

const usersRoutes = require('./users.routes');
const ordersEnrollmentRoutes = require('./orderEnrollment.routes');
// const sessionsRoutes = require('./sessions.routes');
const foodsRoutes = require('./foods.routes');
// const ingredientsRoutes = require('./ingredients.routes');
const ordersRoutes = require('./orders.routes');

const routes = Router();
routes.use('/users', usersRoutes);
routes.use('/enrollment', ordersEnrollmentRoutes);
// routes.use('/sessions', sessionsRoutes);
routes.use('/foods', foodsRoutes);
// routes.use('/ingredients', ingredientsRoutes);
routes.use('/orders', ordersRoutes);

module.exports = routes;