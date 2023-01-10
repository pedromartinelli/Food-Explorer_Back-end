const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class OrdersController {
  async create(request, response) {
    const { status, total_price } = request.body;
    const { user_id } = request.params;

    await knex('orders').insert({
      status,
      total_price,
      user_id
    });

    return response.status(201).json();
  }
}

module.exports = OrdersController