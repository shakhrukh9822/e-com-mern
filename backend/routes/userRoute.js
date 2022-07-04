const express = require("express");
const {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  resetPassword,
  getMyDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/logout").get(logOut);
router.route("/login").post(loginUser);
router.route("/registration").post(registerUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthentificatedUser, updatePassword);
router.route("/me").get(isAuthentificatedUser, getMyDetails);
router.route("/me/update").put(isAuthentificatedUser, updateProfile);

// Admin routes==========================
router
  .route("/admin/users")
  .get(isAuthentificatedUser, authorizeRole("admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthentificatedUser, authorizeRole("admin"), getUserDetails)
  .put(isAuthentificatedUser, authorizeRole("admin"), updateUserRole)
  .delete(isAuthentificatedUser, authorizeRole("admin"), deleteUser);

module.exports = router;
