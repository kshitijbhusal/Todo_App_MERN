import express from "express";
const router = express.Router();

import {
  register,
  login,
  getMe,
  auth,
  logout,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

//--------------------------------------------------------------------------Routes

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getme").get(protect, getMe);
router.route("/auth").get(auth);
router.route("/logout").post(logout);

export default router;
