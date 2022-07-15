const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "Please Enter Product Slug"],
    trim: true,
  },
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
