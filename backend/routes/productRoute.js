const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/products")
  .post(isAuthentificatedUser, authorizeRole("admin"), createProduct);

router
  .route("/products/:id")
  .put(isAuthentificatedUser, authorizeRole("admin"), updateProduct)
  .delete(isAuthentificatedUser, authorizeRole("admin"), deleteProduct)
  .get(getProduct);

module.exports = router;
