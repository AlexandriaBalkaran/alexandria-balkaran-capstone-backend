/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('id').primary();
        table.integer('venue_id').unsigned().notNullable();
        table.string('name').notNullable();
        table.text('comment').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        
        table.foreign('venue_id')
             .references('id')
             .inTable('venues')
             .onDelete('CASCADE');
      });
    }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('comments');
};
