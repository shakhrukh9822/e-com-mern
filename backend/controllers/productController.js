const Product = require("../models/porductModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsynErrors");
const ApiFeatures = require("../utils/apifeatures");

// Creating Poduct = Access For Admin =======
exports.createProduct = catchAsyncError(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});
// ==========================================

// Get All Product===========================
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();

  const apiFetaures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFetaures.query;

  res.status(200).json({ success: true, products, productCount });
});
// ==========================================

// Get a Product=============================
exports.getProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  res.status(200).json({ success: true, product });
});

// ==========================================

// Update Product = Access For Admin ========
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});
// ==========================================

// Delete Product = Access For Admin ========
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  await product.remove();
  res
    .status(200)
    .json({ success: true, message: "Product Deleted Successfuly" });
});
// ==========================================
