/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('venues', (table) => {
    table.increments('id').primary(); 
    table.string('name').notNullable(); 
    table.string('neighbourhood').notNullable(); 
    table.string('address').notNullable();  
    table.string('photo').notNullable(); 
    table.string('website').nullable(); 
    table.text('description').nullable();
    table.decimal('lat', 9, 6).notNullable();
    table.decimal('lng', 9, 6).notNullable(); 
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
export function down(knex) {
  return knex.schema.dropTableIfExists('venues'); 
};
