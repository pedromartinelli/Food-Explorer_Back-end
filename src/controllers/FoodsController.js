const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class FoodsController {
  async create(request, response) {
    const { name, description, price, ingredients } = request.body;

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

    return response.json();
  };

  async delete(request, response) {
    const { id } = request.params;

    await knex('foods').where({ id }).delete();

    return response.json();
  };

  async update(request, response) {
    const { name, description, price, ingredients, updated_at } = request.body;
    const { id } = request.params;

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

    // const ingredientsAlreadyRegistered = await knex('ingredients').where({ food_id: id }).orderBy('name');

    // const compareIngredients = ingredientsInsert.filter


    // await knex('ingredients').where({ name }).delete();
    await knex('ingredients').insert(ingredientsInsert);

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