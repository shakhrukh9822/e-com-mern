const ProductCategory = require("../models/productCategoryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsynErrors");

// Create a new ProductCategory================
exports.createCategory = catchAsyncError(async (req, res, next) => {
  const { name, slug } = req.body;

  const category = await ProductCategory.create({
    name,
    slug,
  });

  res.status(201).json({ success: true, category });
});
// ============================================
// Get All Product Categories==================
exports.getAllCategories = catchAsyncError(async (req, res, next) => {
  const categories = await ProductCategory.find();

  res.status(200).json({ success: true, categories });
});
// ============================================
// Delete Product Categoriy====================
exports.deleteCategory = catchAsyncError(async (req, res, next) => {
  const category = await ProductCategory.findById(req.params.id);

  if (!category) return next(new ErrorHandler("Category Not Found", 404));

  await category.remove();
  res
    .status(200)
    .json({ success: true, message: "Category Deleted Successfuly" });
});
// ============================================
exports.updateCategory = catchAsyncError(async (req, res, next) => {
  let category = await ProductCategory.findById(req.params.id);

  if (!category) return next(new ErrorHandler("Category Not Found", 404));

  category = await ProductCategory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    category,
  });
});
