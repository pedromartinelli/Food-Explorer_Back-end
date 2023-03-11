const { Router } = require('express');

const OrderEnrollmentController = require('../controllers/OrderEnrollmentController');

const orderEnrollmentRoutes = Router();
const orderEnrollmentController = new OrderEnrollmentController();

orderEnrollmentRoutes.post('/:user_id', orderEnrollmentController.create);

module.exports = orderEnrollmentRoutes;