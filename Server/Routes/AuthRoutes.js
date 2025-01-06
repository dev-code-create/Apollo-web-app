import { Router } from "express";
import {
  getUserInfo,
  login,
  signup,
  updateProfile,
} from "../Controllers/AuthController.js";
import { verifyToken } from "../Middlewares/authMiddleware.js";
const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);

export default authRoutes;
