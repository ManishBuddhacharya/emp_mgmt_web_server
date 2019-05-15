exports.up = function(knex, Promise) {
  return knex.schema
        .createTable('employee', function(table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('address', 255).notNullable();
            table.integer('age').notNullable();
            table.double('salary', 255).notNullable();
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employee')
};
