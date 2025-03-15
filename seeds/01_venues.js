/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function seed(knex) {
    // Deletes ALL existing entries
    return knex('venues').del()
      .then(function () {
        // Inserts seed entries
        return knex('venues').insert([
          {
            name: 'Luma',
            neighbourhood: 'King West',
            address: '330 King St West, Toronto ON M5V 3X5',
            website: 'http://www.lumarestaurant.com',
          },
          {
            name: 'The Joneses',
            neighbourhood: 'Downtown Toronto',
            address: '33 Yonge St #100, Toronto ON M5E 1S9',
            website: '',
          },
          {
            name: 'O&B Canteen',
            neighbourhood: 'King West',
            address: '330 King St. W, Toronto ON M5V 3X2',
            website: 'https://www.obcanteen.com',
          },
          {
            name: 'The Dorset',
            neighbourhood: 'Leslieville',
            address: '2190 Queen St E, Toronto ON M4E 1E2',
            website: '',
          },
        ]);
      });
  }