const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class FoodsController {
  async create(request, response) {
    const { name, description, price, ingredients } = request.body;
    const role = request.user.role;

    if (role === 'admin') {
      const food_id = await knex('foods').insert({
        name,
        description,
        price,
      });

      const ingredientsInsert = ingredients.map(name => {
        return {
          food_id,
          name
        };
      });

      await knex('ingredients').insert(ingredientsInsert);

    } else {
      throw new AppError('Você não possui direitos de administrador.')
    };


    return response.json();
  };

  async delete(request, response) {
    const { id } = request.params;
    const role = request.user.role;

    if (role === 'admin') {
      await knex('foods').where({ id }).delete();
    } else {
      throw new AppError('Você não possui direitos de administrador.')
    };

    return response.json();
  };

  async update(request, response) {
    const { name, description, price, ingredients } = request.body;
    const { id } = request.params;
    const role = request.user.role;

    if (role === 'admin') {
      const food = await knex('foods').where('id', id).first();

      if (!food) {
        throw new AppError('Comida não existe.');
      }

      const currentDatetime = new Date().toLocaleString();


      await knex('foods').where('id', id).update({
        name,
        description,
        price,
        updated_at: currentDatetime
      });


      const ingredientsInsert = ingredients.map(name => {
        return {
          food_id: id,
          name
        };
      });

      await knex('ingredients').insert(ingredientsInsert);

    } else {
      throw new AppError('Você não possui direitos de administrador.')
    };

    return response.json();
  };

  async show(request, response) {
    const { id } = request.params;

    const food = await knex('foods').where({ id }).first();
    const ingredients = await knex('ingredients').where({ food_id: id }).orderBy('name');

    return response.json({
      ...food,
      ingredients
    });
  };

  async index(request, response) {
    const { name } = request.query;

    const foods = await knex('foods').whereLike('name', `%${name}%`).orderBy('name');

    return response.json(foods);

  };
};

module.exports = FoodsController;