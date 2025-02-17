import express from "express";
const router = express.Router();
import { protect } from "../middlewares/authMiddleware.js";
import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

router.route("/create").post(protect, createTodo);
router.route("/get").get(protect, getTodo);
router.route("/update/:id").patch(updateTodo);
router.route("/delete").post(deleteTodo);

export default router;
