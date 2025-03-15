/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('deals', (table) => {
      table.increments('id').primary(); 
      table.integer('venue_id').unsigned().notNullable(); 
      table.foreign('venue_id').references('id').inTable('venues').onDelete('CASCADE');  // Foreign key constraint
      table.string('type_of_drink').nullable();  
      table.string('type_of_food').nullable();  
      table.string('category').notNullable(); 
      table.integer('price').notNullable();
      table.time('start').notNullable(); 
      table.time('end').notNullable();  
      table.string('day').notNullable(); 
      table.timestamp('created_at').defaultTo(knex.fn.now()); 
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));  // Timestamp for updates
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTableIfExists('deals'); 
  };