import express from "express";
import * as venuesControllers from "../controllers/venues-controllers.js";
import * as dealsControllers from "../controllers/deals-controllers.js";
import * as commentsControllers from "../controllers/comments-controllers.js";


const router = express.Router();

router
.route("/")
.get(venuesControllers.index);

router
.route("/:id")
.get(venuesControllers.findOne);

router
.route("/:id/deals")
.get(dealsControllers.findByVenue);

router
.route("/:id/comments")
// .get(commentsControllers.getComments)
.post(commentsControllers.createComment);

export default router;
