import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const createComment = async (req, res) => {
    try {
        const venueId = req.params.id;
        const { author, content } = req.body;

        // Validation
        if (!author?.trim() || !content?.trim()) {
            return res.status(400).json({ 
                message: "Both author and content are required" 
            });
        }

        // Check if venue comment exists
        const venueCommentExists = await knex("venues")
            .where({ id: venueId })
            .first();

        if (!venueCommentExists) {
            return res.status(404).json({ message: "Venue comments not found" });
        }

        // Insert comment
        const [newComment] = await knex("comments")
            .insert({
                venue_id: venueId,
                author: author.trim(),
                content: content.trim()
            })
            .returning('*');

        res.status(201).json(newComment);

    } catch (e) {
        console.error('Comment creation error:', e);
        res.status(500).json({ 
            message: "Failed to create comment",
            error: e.message
        });
    }
};