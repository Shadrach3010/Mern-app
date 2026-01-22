import express from 'express';
import { protect } from "../middleware/authMiddleware.js"
import { getUsers, registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile } from '../controllers/userController.js';

const router = express.Router()

router.get("/", getUsers)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)
router.delete("/profile", protect, deleteUserProfile)
router.post("/register", registerUser) 
router.post("/login", loginUser)

export default router