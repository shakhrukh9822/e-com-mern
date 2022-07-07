const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter Description"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    ratings: { type: Number, default: 0 },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    category: {
      type: String,
      required: [true, "Please Enter Product Category"],
      trim: true,
    },
    shippingCompany: {
      type: String,
      required: [true, "Please Enter Shipping Company"],
      maxLength: [50, "Product Model cannot exceed 8 characters"],
    },
    productModel: {
      type: String,
      required: [true, "Please Enter product model"],
      maxLength: [20, "Product Model cannot exceed 8 characters"],
    },
    brand: {
      type: String,
      required: [true, "Please Enter product brand"],
      maxLength: [20, "Price cannot exceed 8 characters"],
    },
    discauntPrecent: {
      type: Number,
      maxLength: [100, "Brand cannot be more than 100%"],
      default: 0,
    },
    hasDiscaunt: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    stock: {
      type: Number,
      required: [true, "Please Enter Product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    numOfReviews: { type: Number, default: 0 },
    reviews: [
      {
        user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true, trim: true },
      },
    ],
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
