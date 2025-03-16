import express from "express";
import * as dealsControllers from "../controllers/deals-controllers.js";


const router = express.Router();

router
.route("/")
.get(dealsController.index)

router
.route("/:id")

export default router;
