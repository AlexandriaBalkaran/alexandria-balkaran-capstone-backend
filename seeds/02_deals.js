/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
    // Deletes ALL existing entries
    return knex('deals').del()
      .then(function () {
        // Inserts seed entries
        return knex('deals').insert([
          // Luma Deals
          { venue_id: 1, type_of_drink: 'cocktail', category: 'Signature Cocktail', price: 6, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 1, type_of_drink: 'cocktail', category: 'Signature Cocktail', price: 6, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 1, type_of_drink: 'cocktail', category: 'Signature Cocktail', price: 6, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 1, type_of_drink: 'cocktail', category: 'Signature Cocktail', price: 6, start: '16:00', end: '17:30', day: 'Friday' },
          { venue_id: 1, type_of_drink: 'cocktail', category: 'Signature Cocktail', price: 6, start: '16:00', end: '17:30', day: 'Saturday' },
          { venue_id: 1, type_of_drink: 'wine', category: 'House Wine', price: 5, start: '17:30', end: '20:00', day: 'Tuesday' },
          { venue_id: 1, type_of_drink: 'wine', category: 'House Wine', price: 5, start: '17:30', end: '20:00', day: 'Wednesday' },
          { venue_id: 1, type_of_drink: 'wine', category: 'House Wine', price: 5, start: '17:30', end: '20:00', day: 'Thursday' },
          { venue_id: 1, type_of_drink: 'wine', category: 'House Wine', price: 5, start: '17:30', end: '20:00', day: 'Friday' },
          { venue_id: 1, type_of_drink: 'wine', category: 'House Wine', price: 5, start: '17:30', end: '20:00', day: 'Saturday' },
          { venue_id: 1, type_of_food: 'appetizer', category: 'Bruschetta', price: 7, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 1, type_of_food: 'appetizer', category: 'Bruschetta', price: 7, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 1, type_of_food: 'appetizer', category: 'Bruschetta', price: 7, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 1, type_of_food: 'appetizer', category: 'Bruschetta', price: 7, start: '16:00', end: '17:30', day: 'Friday' },
          { venue_id: 1, type_of_food: 'appetizer', category: 'Bruschetta', price: 7, start: '16:00', end: '17:30', day: 'Saturday' },
          { venue_id: 1, type_of_food: 'main', category: 'Calamari', price: 10, start: '17:30', end: '20:00', day: 'Tuesday' },
          { venue_id: 1, type_of_food: 'main', category: 'Calamari', price: 10, start: '17:30', end: '20:00', day: 'Wednesday' },
          { venue_id: 1, type_of_food: 'main', category: 'Calamari', price: 10, start: '17:30', end: '20:00', day: 'Thursday' },
          { venue_id: 1, type_of_food: 'main', category: 'Calamari', price: 10, start: '17:30', end: '20:00', day: 'Friday' },
          { venue_id: 1, type_of_food: 'main', category: 'Calamari', price: 10, start: '17:30', end: '20:00', day: 'Saturday' },
  
          // The Joneses Deals
          { venue_id: 2, type_of_drink: 'cocktail', category: 'House Margarita', price: 5, start: '17:00', end: '18:00', day: 'Tuesday' },
          { venue_id: 2, type_of_drink: 'cocktail', category: 'House Margarita', price: 5, start: '17:00', end: '18:00', day: 'Wednesday' },
          { venue_id: 2, type_of_drink: 'cocktail', category: 'House Margarita', price: 5, start: '17:00', end: '18:00', day: 'Thursday' },
          { venue_id: 2, type_of_drink: 'cocktail', category: 'House Margarita', price: 5, start: '17:00', end: '18:00', day: 'Friday' },
          { venue_id: 2, type_of_drink: 'cocktail', category: 'House Margarita', price: 5, start: '17:00', end: '18:00', day: 'Saturday' },
          { venue_id: 2, type_of_drink: 'beer', category: 'Beer (local tap)', price: 4, start: '17:00', end: '18:00', day: 'Tuesday' },
          { venue_id: 2, type_of_drink: 'beer', category: 'Beer (local tap)', price: 4, start: '17:00', end: '18:00', day: 'Wednesday' },
          { venue_id: 2, type_of_drink: 'beer', category: 'Beer (local tap)', price: 4, start: '17:00', end: '18:00', day: 'Thursday' },
          { venue_id: 2, type_of_drink: 'beer', category: 'Beer (local tap)', price: 4, start: '17:00', end: '18:00', day: 'Friday' },
          { venue_id: 2, type_of_drink: 'beer', category: 'Beer (local tap)', price: 4, start: '17:00', end: '18:00', day: 'Saturday' },
          { venue_id: 2, type_of_food: 'main', category: 'Tacos', price: 6, start: '17:00', end: '18:00', day: 'Tuesday' },
          { venue_id: 2, type_of_food: 'main', category: 'Tacos', price: 6, start: '17:00', end: '18:00', day: 'Wednesday' },
          { venue_id: 2, type_of_food: 'main', category: 'Tacos', price: 6, start: '17:00', end: '18:00', day: 'Thursday' },
          { venue_id: 2, type_of_food: 'main', category: 'Tacos', price: 6, start: '17:00', end: '18:00', day: 'Friday' },
          { venue_id: 2, type_of_food: 'main', category: 'Tacos', price: 6, start: '17:00', end: '18:00', day: 'Saturday' },
          { venue_id: 2, type_of_food: 'appetizer', category: 'Wings', price: 8, start: '18:00', end: '19:00', day: 'Tuesday' },
          { venue_id: 2, type_of_food: 'appetizer', category: 'Wings', price: 8, start: '18:00', end: '19:00', day: 'Wednesday' },
          { venue_id: 2, type_of_food: 'appetizer', category: 'Wings', price: 8, start: '18:00', end: '19:00', day: 'Thursday' },
          { venue_id: 2, type_of_food: 'appetizer', category: 'Wings', price: 8, start: '18:00', end: '19:00', day: 'Friday' },
          { venue_id: 2, type_of_food: 'appetizer', category: 'Wings', price: 8, start: '18:00', end: '19:00', day: 'Saturday' },
  
          // O&B Canteen Deals
          { venue_id: 3, type_of_drink: 'cocktail', category: 'Cosmopolitan', price: 7, start: '16:00', end: '17:30', day: 'Monday' },
          { venue_id: 3, type_of_drink: 'cocktail', category: 'Cosmopolitan', price: 7, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 3, type_of_drink: 'cocktail', category: 'Cosmopolitan', price: 7, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 3, type_of_drink: 'cocktail', category: 'Cosmopolitan', price: 7, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 3, type_of_drink: 'cocktail', category: 'Cosmopolitan', price: 7, start: '16:00', end: '17:30', day: 'Friday' },
          { venue_id: 3, type_of_drink: 'beer', category: 'Pale Ale', price: 4, start: '16:00', end: '17:30', day: 'Monday' },
          { venue_id: 3, type_of_drink: 'beer', category: 'Pale Ale', price: 4, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 3, type_of_drink: 'beer', category: 'Pale Ale', price: 4, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 3, type_of_drink: 'beer', category: 'Pale Ale', price: 4, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 3, type_of_drink: 'beer', category: 'Pale Ale', price: 4, start: '16:00', end: '17:30', day: 'Friday' },
          { venue_id: 3, type_of_food: 'appetizer', category: 'Chips & Guacamole', price: 6, start: '16:00', end: '17:30', day: 'Monday' },
          { venue_id: 3, type_of_food: 'appetizer', category: 'Chips & Guacamole', price: 6, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 3, type_of_food: 'appetizer', category: 'Chips & Guacamole', price: 6, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 3, type_of_food: 'appetizer', category: 'Chips & Guacamole', price: 6, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 3, type_of_food: 'appetizer', category: 'Chips & Guacamole', price: 6, start: '16:00', end: '17:30', day: 'Friday' },
  
          // The Dorset Deals
          { venue_id: 4, type_of_drink: 'cocktail', category: 'Negroni', price: 8, start: '16:00', end: '17:30', day: 'Tuesday' },
          { venue_id: 4, type_of_drink: 'cocktail', category: 'Negroni', price: 8, start: '16:00', end: '17:30', day: 'Wednesday' },
          { venue_id: 4, type_of_drink: 'cocktail', category: 'Negroni', price: 8, start: '16:00', end: '17:30', day: 'Thursday' },
          { venue_id: 4, type_of_drink: 'cocktail', category: 'Negroni', price: 8, start: '16:00', end: '17:30', day: 'Friday' },
          { venue_id: 4, type_of_drink: 'cocktail', category: 'Negroni', price: 8, start: '16:00', end: '17:30', day: 'Saturday' },
        ]);
      });
  }