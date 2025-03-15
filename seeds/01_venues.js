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
            venue_id: 1,
            name: 'Luma',
            neighbourhood: 'King West',
            address: '330 King St West, Toronto ON M5V 3X5',
            website: 'http://www.lumarestaurant.com',
          },
          {
            venue_id: 2,
            name: 'The Joneses',
            neighbourhood: 'Downtown Toronto',
            address: '33 Yonge St #100, Toronto ON M5E 1S9',
            website: '',
          },
          {
            venue_id: 3,
            name: 'O&B Canteen',
            neighbourhood: 'King West',
            address: '330 King St. W, Toronto ON M5V 3X2',
            website: 'https://www.obcanteen.com',
          },
          {
            venue_id: 4,
            name: 'The Dorset',
            neighbourhood: 'Leslieville',
            address: '2190 Queen St E, Toronto ON M4E 1E2',
            website: '',
          },
          {
            venue_id: 5,
            name: 'Valerie',
            neighbourhood: 'Waterfront',
            address: "111 Princes' Blvd, Toronto ON M6K 3C3",
            website: 'https://www.chotto-matte.com',
          },
          {
            venue_id: 6,
            name: 'Cactus Club Cafe',
            neighbourhood: 'Financial District',
            address: '77 Adelaide St W, Toronto ON M5X 1C1',
            website: 'http://www.cactusclubcafe.com',
          },
          {
            venue_id: 7,
            name: 'Chotto Matte',
            neighbourhood: 'Downtown Toronto',
            address: '161 Bay St, Toronto ON M5J 2S4',
            website: 'https://www.chotto-matte.com',
          },
          {
            name: 'Baro',
            neighbourhood: 'King West',
            address: '485 King Street West, Toronto ON M5V 1K4',
            website: 'http://www.barotoronto.com',
          },
          {
            name: "The Rec Room",
            neighbourhood: "Waterfront",
            address: "255 Bremner Blvd, Toronto ON M5V 3M9",
            website: "https://www.therecroom.com"
        },{
            name: "Scaddabush",
            neighbourhood: "Financial District",
            address: "156 Front St W, Toronto ON M5J 2L6",
            website: "https://www.scaddabush.com"
        },{
            name: "The Keg Steakhouse + Bar",
            neighbourhood: "Yorkville",
            address: "40 Front St E, Toronto ON M5E 1A1",
            website: "https://www.kegsteakhouse.com"
        },{
            name: "Bar Chef",
            neighbourhood: "Queen West",
            address: "472 Queen St W, Toronto ON M5V 2A9",
            website: "https://www.barchef.com"
        },{
            name: "Kōjin",
            neighbourhood: "King Street West",
            address: "190 University Ave, Toronto ON M5H 0A3",
            website: "https://www.konrestaurant.com"
        },{
            name: "Patria",
            neighbourhood: "King West",
            address: "478 King St W, Toronto ON M5V 1L7",
            website: "https://www.patria.ca"
        },{
            name: "The Drake Hotel",
            neighbourhood: "Queen West",
            address: "1150 Queen St W, Toronto ON M6J 1J3",
            website: "https://www.thedrake.ca"
        },{
            name: "The Queen & Beaver Public House",
            neighbourhood: "Yorkville",
            address: "35 Elm St, Toronto ON M5G 1H1",
            website: "https://www.queenandbeaver.ca"
        },{
            name: "Wildfire Steakhouse & Wine Bar",
            neighbourhood: "Yorkville",
            address: "2300 Yonge St, Toronto ON M4P 1E4",
            website: "https://www.wildfiresteakhouse.com"
        },{
            name: "Richmond Station",
            neighbourhood: "Financial District",
            address: "1 Richmond St W, Toronto ON M5H 3W4",
            website: "https://richmondstation.ca"
        },{
            name: "The Miller Tavern",
            neighbourhood: "York Mills",
            address: "3885 Yonge St, Toronto ON M4N 3N6",
            website: "https://millerstaverntoronto.ca"
        },{
            name: "Bar Reyna",
            neighbourhood: "Yorkville",
            address: "158 Cumberland St, Toronto ON M5R 1A8",
            website: "https://barreyna.com"
        },{
            name: "The Saint Tavern",
            neighbourhood: "Queen West",
            address: "286 King St W, Toronto ON M5V 1J2",
            website: "https://thesainttavern.com"
        },{
            name: "Taverna Mercatto",
            neighbourhood: "King Street West",
            address: "225 King St W, Toronto ON M5V 3M2",
            website: "https://mercatto.ca"
        },{
            name: "Café Boulud",
            neighbourhood: "Yorkville",
            address: "60 Yorkville Ave, Toronto ON M4W 0A4",
            website: "https://www.cafeboulud.com"
        },{
            name: "Kinka Izakaya Original",
            neighbourhood: "Financial District",
            address: "398 Church St, Toronto ON M5B 2A2",
            website: "https://kinka.com"
        },{
            name: "Tutto Pronto",
            neighbourhood: "Dundas West",
            address: "1175 Dundas St W, Toronto ON M6J 1X4",
            website: "https://www.tuttopronto.com"
        },
        ]);
      });
  }