const express = require("express");
const {
  newOrder,
  getSingleOrder,
  getLoggedInUserOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/order").post(isAuthentificatedUser, newOrder);
router.route("/orders/me").get(isAuthentificatedUser, getLoggedInUserOrders);
router.route("/order/:id").get(isAuthentificatedUser, getSingleOrder);

// Admin routes==========================
router
  .route("/admin/orders")
  .get(isAuthentificatedUser, authorizeRole("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthentificatedUser, authorizeRole("admin"), updateOrder)
  .delete(isAuthentificatedUser, authorizeRole("admin"), deleteOrder);
module.exports = router;
