import express from "express";
import * as venuesControllers from "../controllers/venues-controllers.js";


const router = express.Router();

router
.route("/")
.get(venuesControllers.index);

router
.route("/:id")
.get(venuesControllers.findOne);

export default router;
