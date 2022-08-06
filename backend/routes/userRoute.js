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
  addToUserViewedLaterList,
  getUserViewedLaterList,
  deleteProductFromViewedLaterList,
  addToFavouriteList,
  getUserFavouriteProductsList,
  deleteProductFromFavouriteList,
  setUserBanner,
} = require("../controllers/userController");

const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/logout").post(logOut);
router.route("/login").post(loginUser);
router.route("/registration").post(registerUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthentificatedUser, updatePassword);
router.route("/me").get(isAuthentificatedUser, getMyDetails);
router.route("/me/update").put(isAuthentificatedUser, updateProfile);
router
  .route("/view-later-list")
  .get(isAuthentificatedUser, getUserViewedLaterList);
router
  .route("/view-later-list/:id")
  .post(isAuthentificatedUser, addToUserViewedLaterList)
  .delete(isAuthentificatedUser, deleteProductFromViewedLaterList);

router
  .route("/favourite")
  .get(isAuthentificatedUser, getUserFavouriteProductsList);
router
  .route("/favourite/:id")
  .post(isAuthentificatedUser, addToFavouriteList)
  .delete(isAuthentificatedUser, deleteProductFromFavouriteList);
router.route("/set-user-banner").post(isAuthentificatedUser, setUserBanner);

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
