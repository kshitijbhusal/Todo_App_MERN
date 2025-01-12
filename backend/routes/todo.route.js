import express from "express";
const router = express.Router();
import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

router.route("/create").post(createTodo);
router.route("/get").get(getTodo);
router.route("/update").post(updateTodo);
router.route("/delete").post(deleteTodo);

export default router;
