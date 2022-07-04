const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  createProductReview,
  getProductReviews,
  deleteProductReviews,
} = require("../controllers/productController");
const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/product/:id").get(getProduct);
router.route("/products").get(getAllProducts);
router.route("/review").put(isAuthentificatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthentificatedUser, deleteProductReviews);

// Admin routes==========================
router
  .route("/admin/product")
  .post(isAuthentificatedUser, authorizeRole("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthentificatedUser, authorizeRole("admin"), updateProduct)
  .delete(isAuthentificatedUser, authorizeRole("admin"), deleteProduct);

module.exports = router;
