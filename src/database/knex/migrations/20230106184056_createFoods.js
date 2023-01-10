exports.up = knex => knex.schema.createTable('foods', table => {
  table.increments('id');
  table.text('name');
  table.text('description');
  table.text('image');
  table.integer('price');
  
  table.timestamp('created_at').default(new Date().toLocaleString());
  table.timestamp('updated_at').default(new Date().toLocaleString());
});

exports.down = knex => knex.schema.dropTable('foods');
