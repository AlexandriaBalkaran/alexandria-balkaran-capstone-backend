import express from "express";
import * as venuesControllers from "../controllers/venues-controllers.js";


const router = express.Router();

router
.route("/")
.get(venuesController.index)

router
.route("/:id")

export default router;
