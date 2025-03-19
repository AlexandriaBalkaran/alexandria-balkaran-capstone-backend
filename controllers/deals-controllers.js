import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Get all deals
const index = async (_req, res) => {
    try {
      const deals = await knex("deals").select("*");

      if (deals.length === 0) {
        return res.status(404).json({ message: "No deals found" });
    }
      res.status(200).json(deals);
    } catch (e) {
      res.status(400).send(`Error retrieving Users: ${e}`);
    }
};

// Get a single deal by ID
const findOne = async (req, res) => {
    try {
        const deal = await knex("deals").where({ id: req.params.id }).first();

        if (!deal) {
            return res.status(404).json({
                message: `Deal with ID ${req.params.id} not found`,
            });
        }

        const { updated_at, created_at, ...data } = deal;

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
    