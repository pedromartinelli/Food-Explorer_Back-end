const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class OrderEnrollmentController {
  async create(request, response) {
    const { food_id } = request.body;
    const { user_id } = request.params;

    const foodsInsert = food_id.map(food_id => {
      return {
        user_id,
        food_id
      };
    });

    await knex('order_enrollment').insert(foodsInsert);

    return response.status(201).json();
  };
}

module.exports = OrderEnrollmentController