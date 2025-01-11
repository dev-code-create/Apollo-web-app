import { Router } from "express";
import { verifyToken } from "../Middlewares/authMiddleware.js";
import { searchContacts } from "../Controllers/ContactController.js";

const contactRoutes = Router();

contactRoutes.post("/search", verifyToken, searchContacts);

export default contactRoutes;
