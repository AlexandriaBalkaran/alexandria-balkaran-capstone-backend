import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Get all deals
const index = async (_req, res) => {
    try {
      const deals = await knex("deals").select("*");

      if (deals.length === 0) {
        return res.status(404).json({ message: "No venues found" });
    }
      res.status(200).json(deals);
    } catch (e) {
      res.status(400).send(`Error retrieving Users: ${e}`);
    }
};

// Get a single deal by ID
const findOne = async (req, res) => {
    try {
        const deal = await knex("deals").where({ id: req.params.id });

        if (deal.length === 0) {
            return res.status(404).json({
                message: `Deal with ID ${req.params.id} not found`,
            });
        }

        const dealData = deal[0];
        const { updated_at, created_at, ...data } = dealData;

        // try {
        //     const deal = await knex("deals")
        //         .select(
        //             "deals.*", 
        //             "venues.id as venue_id", 
        //             "venues.name as venue_name", 
        //             "venues.neighbourhood", 
        //             "venues.address", 
        //             "venues.website"
        //         )
        //         .join("venues", "deals.venue_id", "venues.id")
        //         .where("deals.id", req.params.id)
        //         .first(); 
    
        //     if (!deal) {
        //         return res.status(404).json({
        //             message: `Deal with ID ${req.params.id} not found`,
        //         });
        //     }
    
        //     const { updated_at, created_at, venue_id, venue_name, neighbourhood, address, website, ...dealData } = deal;
            
        //     const responseData = {
        //         ...dealData, 
        //         venue: { 
        //             id: venue_id,
        //             name: venue_name,
        //             neighbourhood,
        //             address,
        //             website
        //         }
        //     };

        res.status(200).json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: `Unable to retrieve deal data for deal with ID ${req.params.id}`,
        });
    }
};

export {
    index,
    findOne,
}
    