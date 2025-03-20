import express from "express";
import * as venuesControllers from "../controllers/venues-controllers.js";
import * as commentsControllers from '../controllers/comments-controllers.js'


const router = express.Router();

//Venue
router
.route("/")
.get(venuesControllers.index);

router
.route("/:id")
.get(venuesControllers.findOne);

//Deals
router
.route("/:id/deals")
.get(venuesControllers.findByVenue)

//Comments
router
.route("/:id/comments")
.get(commentsControllers.findByVenue)
.post(commentsControllers.add);

router
.route("/:id/comments/:commentId")
.put(commentsControllers.update)
.delete(commentsControllers.remove);

export default router;
