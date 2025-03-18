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

export {
    index,
    findOne,
}