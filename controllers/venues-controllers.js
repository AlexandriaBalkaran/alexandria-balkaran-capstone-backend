import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Get all venues
const index = async (req, res) => {
    try {
        const venues = await knex("venues");

        if (venues.length === 0) {
            return res.status(404).json({ message: "No venues found" });
        }

        res.status(200).json(venues);
    } catch (e) {
        console.error(e);
        res.status(400).send(`Error retrieving venues: ${e}`);
    }
};

// Get a venue by ID
const findOne = async (req, res) => {
    try {
        const venue = await knex("venues").where({ id: req.params.id }).first();

        if (!venue) {
            return res.status(404).json({
                message: `Venue with ID ${req.params.id} not found`,
            });
        }

        const { updated_at, created_at, ...data } = venue;

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: `Unable to retrieve venue data for venue with ID ${req.params.id}`,
        });
    }
};

// Find Deals By Venue
const findByVenue = async (req, res) => {
    try {

    const deals = await knex("deals")
    .select(
        'deals.*', 
        'venues.name as name', )
    .join('venues', 'deals.venue_id', 'venues.id')
    .where({ 'deals.venue_id': req.params.id });


      if (deals.length === 0) {
        return res.status(404).json({ message: "No deals found" });
    }
      res.status(200).json(deals);
    } catch (e) {
      res.status(400).send(`Error retrieving Users: ${e}`);
    }
};















// const findVenueByTime = async (req, res) => {
//     try {
//       const { period } = req.query;
  
//       if (!period) {
//         return res.status(400).json({ message: "Time period (morn, aft, eve) is required" });
//       }
  
//       // Fetch only relevant deals with start and end times
//       const deals = await knex("deals")
//         .select("deals.*", "venues.name as venue_name")
//         .join("venues", "deals.venue_id", "venues.id")
//         .whereNotNull("deals.start")
//         .whereNotNull("deals.end");
//         console.log(deals);
  
//       if (!deals.length) {
//         return res.status(404).json({ message: "No deals found" });
//       }
  
//           // Convert start and end times to numbers
//         deals.forEach(deal => {
//         deal.start = Number(deal.start);
//         deal.end = Number(deal.end);
//       });

//       // Define time filters
//       const filters = {
//         morn: (deal) => deal.start < 1200,
//         aft: (deal) => deal.start >= 1200 && deal.end < 1800,
//         eve: (deal) => deal.end >= 1800 || deal.end < deal.start,
//       };
  
//       if (!filters[period]) {
//         return res.status(400).json({ message: "Invalid period parameter. Use 'morn', 'aft', or 'eve'" });
//       }
  
//       const filteredDeals = deals.filter(filters[period]);
  
//       if (!filteredDeals.length) {
//         return res.status(404).json({ message: "No deals found for the given time period" });
//       }
  
//       res.status(200).json(filteredDeals);
//     } catch (e) {
//       res.status(500).json({ message: `Error retrieving venues by time: ${e.message}` });
//     }
//   };

const findVenueByTime = async (req, res) => {
    try {
      const { period } = req.query;
  
      if (!period) {
        return res.status(400).json({ message: "Time period (morn, aft, eve) is required" });
      }
  
      // Fetch deals ensuring `start` and `end` are retrieved
      const deals = await knex("deals")
        .select("deals.*", "venues.name as venue_name")
        .join("venues", "deals.venue_id", "venues.id")
        .whereNotNull("deals.start")
        .whereNotNull("deals.end");
  
      if (!deals.length) {
        return res.status(404).json({ message: "No deals found" });
      }
  
      // Helper function to convert time string to minutes since midnight
      const timeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
      };
  
      // Convert start and end times to minutes since midnight
      deals.forEach(deal => {
        deal.start = timeToMinutes(deal.start);  // Convert to minutes
        deal.end = timeToMinutes(deal.end);      // Convert to minutes
      });
  
      // Define time filters
      const filters = {
        morn: (deal) => deal.start < 720,          // Before 12:00 PM (720 minutes)
        aft: (deal) => deal.start >= 720 && deal.end < 1080, // Between 12:00 PM and 6:00 PM
        eve: (deal) => deal.end >= 1080 || deal.end < deal.start, // After 6:00 PM or overnight deals
      };
  
      if (!filters[period]) {
        return res.status(400).json({ message: "Invalid period parameter. Use 'morn', 'aft', or 'eve'" });
      }
  
      // Apply the filter based on the period
      const filteredDeals = deals.filter(filters[period]);
  
      if (!filteredDeals.length) {
        return res.status(404).json({ message: "No deals found for the given time period" });
      }
  
      res.status(200).json(filteredDeals);
    } catch (e) {
      res.status(500).json({ message: `Error retrieving venues by time: ${e.message}` });
    }
  };
  

export {
    index,
    findOne,
    findByVenue,
    findVenueByTime
}