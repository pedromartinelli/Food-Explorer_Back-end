exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id');
  table.text('status');
  table.integer('total_price');

  table.integer('user_id').references('id').inTable('users');
  table.integer('food_id').references('id').inTable('foods');
  
  table.timestamp('created_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('orders');
