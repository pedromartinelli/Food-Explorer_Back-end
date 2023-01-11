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
  };

  async update(request, response) {
    const { status } = request.body;
    const { id } = request.params;

    const order = await knex('orders').where('id', id).first();

    if (!order) {
      throw new AppError('Ordem não existe.');
    }

    await knex('orders').where('id', id).update({
      status
    });

    return response.json();
  };
}

module.exports = OrdersController