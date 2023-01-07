exports.up = knex => knex.schema.createTable('order_enrollment', table => {
  table.integer('user_id').references('id').inTable('users');
  table.integer('food_id').references('id').inTable('foods');
});

exports.down = knex => knex.schema.dropTable('order_enrollment');
