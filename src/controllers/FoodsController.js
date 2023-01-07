const knex = require('../database/knex');

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
};

module.exports = FoodsController;