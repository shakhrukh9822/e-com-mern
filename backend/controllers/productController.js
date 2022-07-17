const Product = require("../models/porductModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsynErrors");
const ApiFeatures = require("../utils/apifeatures");

// Creating Poduct = Access for ADMIN =======
exports.createProduct = catchAsyncError(async (req, res) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});
// ==========================================
// Get All Product===========================
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 8;
  const productCount = await Product.countDocuments();

  const apiFetaures = new ApiFeatures(Product.find(), req.query).pagination(
    resultPerPage
  );
  const products = await apiFetaures.query;

  res
    .status(200)
    .json({ success: true, products, productCount, resultPerPage });
});
// ==========================================

// Search Product============================
exports.searchProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 8;
  const productCount = await Product.countDocuments();

  const apiFetaures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFetaures.query;

  res
    .status(200)
    .json({ success: true, products, productCount, resultPerPage });
});
// ==========================================

// Get a Product=============================
exports.getProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  res.status(200).json({ success: true, product });
});
// ==========================================
// Update Product = Access for ADMIN ========
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
// Delete Product = Access for ADMIN ========
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  await product.remove();
  res
    .status(200)
    .json({ success: true, message: "Product Deleted Successfuly" });
});
// ==========================================
// Create New Review or Update the Review====
exports.createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => String(rev.user) === String(req.user._id)
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (String(rev.user) === String(req.user._id)) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  // Product ratings average summation
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: true });

  res.status(200).json({
    success: true,
    message: "Your Review Comment Placed successfully",
  });
});
// ==========================================
// Get all Reviews of product================
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  res.status(200).json({ success: true, reviews: product.reviews });
});
// ==========================================
// Delete Reviews of product=================
exports.deleteProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  const reviews = product.reviews.filter(
    (rev) => String(rev._id) !== String(req.query.placed_reviewId)
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const ratings = avg / reviews.length;

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    { reviews, ratings, numOfReviews },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  res
    .status(200)
    .json({ success: true, message: "Reviewed Comment deleted successfully" });
});
// ==========================================
