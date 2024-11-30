import express from "express";
import {
  authUser,
  deleteUsers,
  getUserById,
  updateUsers,
  updateUserProfile,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

export const userRouter = express.Router();
userRouter.route("/").post(registerUser).get(getUsers);
userRouter.post("/logout", logoutUser);
userRouter.post("/login", authUser);
userRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRouter.route("/:id").delete(deleteUsers).get(getUserById).put(updateUsers);
