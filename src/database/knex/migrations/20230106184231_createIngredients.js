exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id');
  table.text('name');
  table.text('image');

  table.integer('food_id').references('id').inTable('foods').onDelete('CASCADE');
});

exports.down = knex => knex.schema.dropTable('ingredients');
