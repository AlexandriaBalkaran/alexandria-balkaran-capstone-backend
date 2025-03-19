// import initKnex from "knex";
// import configuration from "../knexfile.js";

// const knex = initKnex(configuration);

// // Fetch All Comments
// const index = async (req, res) => {
//     try {
//         const venueId = req.params.id;
        
//         const comments = await knex("comments")
//             .where({ venue_id: venueId })
//             .orderBy("created_at", "desc");

//         res.json(comments);
//     } catch (e) {
//         console.error("Error fetching comments:", e);
//         res.status(500).json({ message: "Failed to fetch comments" });
//     }
// };

// // Post Comments
// const add = async (req, res) => {
//     try {
//         const venueId = req.params.id;
//         const { name, comment } = req.body;

//         if (!name?.trim() || !comment?.trim()) {
//             return res.status(400).json({ 
//                 message: "Both name and comment are required" 
//             });
//         }

//         const venueCommentExists = await knex("venues")
//             .where({ id: venueId })
//             .first();

//         if (!venueCommentExists) {
//             return res.status(404).json({ message: "Venue comments not found" });
//         }

//         const [newComment] = await knex("comments")
//             .insert({
//                 venue_id: venueId,
//                 name: name.trim(),
//                 comment: comment.trim(),
//                 created_at: knex.fn.now() 
//             })
//             .returning('*');

//         res.status(201).json(newComment);

//     } catch (e) {
//         console.error('Comment creation error:', e);
//         res.status(500).json({ 
//             message: "Failed to create comment",
//             error: e.message
//         });
//     }
// };

// // Edit Comment
// const update = async (req, res) => {
//     try {
//         const { comment } = req.body;
//         const commentId = req.params.id;

//         if (!comment?.trim()) {
//             return res.status(400).json({ message: "Comment cannot be empty" });
//         }

//         const updated = await knex("comments")
//             .where({ id: commentId })
//             .update({ comment: comment.trim() });

//         if (!updated) {
//             return res.status(404).json({ message: "Comment not found" });
//         }

//         res.json({ message: "Comment updated successfully" });
//     } catch (e) {
//         console.error("Error updating comment:", e);
//         res.status(500).json({ message: "Failed to update comment" });
//     }
// };

// // Delete Comment
// const remove = async (req, res) => {
//     try {
//         const commentId = req.params.id;

//         const commentExists = await knex("comments")
//             .where({ id: commentId })
//             .first();

//         if (!commentExists) {
//             return res.status(404).json({ message: "Comment not found" });
//         }

//         await knex("comments")
//             .where({ id: commentId })
//             .del();

//         res.json({ message: "Comment deleted successfully" });
//     } catch (e) {
//         console.error("Error deleting comment:", e);
//         res.status(500).json({ message: "Failed to delete comment" });
//     }
// };

// export {
//     index,
//     add,
//     update,
//     remove
// }