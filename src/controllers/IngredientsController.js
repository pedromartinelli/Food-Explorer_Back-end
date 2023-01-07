// const knex = require('../database/knex');
// class IngredientsController {
//   async index(request, response) {
//     const food_id = request.food.id;

//     const ingredients = await knex('ingredients').where({ food_id }).orderBy('name');

//     return response.json(ingredients);
//   };
// };

// module.exports = IngredientsController;