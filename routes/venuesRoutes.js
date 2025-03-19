import express from "express";
import * as venuesControllers from "../controllers/venues-controllers.js";


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

router
.route("/deals/time")
.get(venuesControllers.findVenueByTime);
//Comments
// router
// .get(commentsControllers.index)
// .post(commentsControllers.add);

// router
// .route("/comments/:commentId")
// .put(commentsControllers.update)
// .delete(commentsControllers.remove);

export default router;
