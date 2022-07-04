const Order = require("../models/orderModel");
const Product = require("../models/porductModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsynErrors");

// Create new Order==========================
exports.newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({ success: true, order });
});
// ==========================================
// Get Single Order==========================
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order)
    return next(
      new ErrorHandler(`Order Not Found with this ID: ${req.params.id} `, 404)
    );

  res.status(200).json({ success: true, order });
});
// ==========================================
// Get Logged in user Order==================
exports.getLoggedInUserOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({ success: true, orders });
});
// ==========================================
// Get All Orders = Access for ADMIN ========
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({ success: true, orders, totalAmount });
});
// ==========================================
// Update Order Status = Access for ADMIN ===
exports.updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return next(
      new ErrorHandler(`Order Not Found with this ID: ${req.params.id} `, 404)
    );

  if (order.orderStatus === "Delivered")
    return next(new ErrorHandler("You have already delivered this order", 400));

  order.orderItems.forEach(async (order) => {
    await updateStock(order.product, order.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({ success: true, order });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save({ validateBeforeSave: false });
}
// ==========================================
// Delete Order = Access for ADMIN ==========
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return next(
      new ErrorHandler(`Order Not Found with this ID: ${req.params.id} `, 404)
    );

  await order.remove();

  res
    .status(200)
    .json({ success: true, message: "Order Deleted successfully" });
});
// ==========================================
