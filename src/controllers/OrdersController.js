const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class OrdersController {
  async create(request, response) {
    const { status, total_price } = request.body;
    const user_id = request.user.id;

    const order_id = await knex('orders').insert({
      status,
      total_price,
      user_id
    });

    console.log('Order create funcionando')

    return response.status(201).json();
  }
}

module.exports = OrdersController