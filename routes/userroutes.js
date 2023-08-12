import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/usercontroller.js";
import { isLoggedIn } from "../middlewares/authmiddleware.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isLoggedIn, getProfile);

export default router;
