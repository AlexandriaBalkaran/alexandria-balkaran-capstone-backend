import express from "express";
import * as commentsControllers from "../controllers/comments-controllers.js";

const router = express.Router();

Comments
router
.get(commentsControllers.index)
.post(commentsControllers.add);

router
.route("/comments/:commentId")
.put(commentsControllers.update)
.delete(commentsControllers.remove);

export default router;
