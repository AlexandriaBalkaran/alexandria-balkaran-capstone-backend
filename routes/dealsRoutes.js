import express from "express";
import * as dealsControllers from "../controllers/deals-controllers.js";


const router = express.Router();

router
.route("/")
.get(dealsControllers.index);

router
.route("/:id")
.get(dealsControllers.findOne);


export default router;