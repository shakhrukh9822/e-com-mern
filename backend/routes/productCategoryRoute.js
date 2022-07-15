const express = require("express");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} = require("../controllers/productCategoryController");
const { isAuthentificatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route("/product-category").get(getAllCategories);

router
  .route("/admin/product-category")
  .post(isAuthentificatedUser, authorizeRole("admin"), createCategory);

router
  .route("/admin/product-category/:id")
  .put(isAuthentificatedUser, authorizeRole("admin"), updateCategory)
  .delete(isAuthentificatedUser, authorizeRole("admin"), deleteCategory);

module.exports = router;
