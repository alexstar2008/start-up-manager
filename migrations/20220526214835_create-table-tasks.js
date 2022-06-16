const tasksTableName = 'tasks';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tasksTableName, (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('phase_id').unsigned();
    table.boolean('completed').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table
      .foreign('phase_id')
      .references('phases.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tasksTableName);
};