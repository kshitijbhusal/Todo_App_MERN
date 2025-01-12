import express from "express";
const router = express.Router();

import { register, login, getMe } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

//--------------------------------------------------------------------------Routes

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getme").get(protect, getMe);

export default router;
