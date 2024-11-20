import { asyncHandler } from "../middleware/asyncHandler.js";
import { User } from "../models/userModel.js";

// @desc Auth user & get token
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc Register User
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout User / clear cookie
// @route Post /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc update profile
// @route Put /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc Get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc Get user by Id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc Get user profile
// @route Delete /api/users/_id
// @access Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc update user
// @route PUT /api/users/_id
// @access Private/Admin
const updateUsers = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  deleteUsers,
  updateUsers,
  updateUserProfile,
  getUserProfile,
  getUsers,
  getUserById,
  logoutUser,
  registerUser,
};
