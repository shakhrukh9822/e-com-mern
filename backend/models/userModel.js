const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      trim: true,
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should not be less than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Place enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    avatar: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    user_banner: {
      public_id: { type: String },
      url: { type: String },
    },
    role: {
      type: String,
      default: "user",
    },
    userViewedLaterList: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        price: {
          type: Number,
        },
        ratings: { type: Number, default: 0 },
        images: [
          {
            public_id: { type: String },
            url: { type: String },
            original: { type: String },
            thumbnail: { type: String },
          },
        ],
        category: {
          type: String,
        },
        shippingCompany: {
          type: String,
        },
        productModel: {
          type: String,
        },
        brand: {
          type: String,
        },
        discauntPrecent: {
          type: Number,
        },
        hasDiscaunt: {
          type: Boolean,
        },
        isNewProduct: {
          type: Boolean,
        },
        stock: {
          type: Number,
        },
        numOfReviews: { type: Number, default: 0 },
      },
    ],
    userFavouriteProductsList: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        price: {
          type: Number,
        },
        ratings: { type: Number, default: 0 },
        images: [
          {
            public_id: { type: String },
            url: { type: String },
            original: { type: String },
            thumbnail: { type: String },
          },
        ],
        category: {
          type: String,
        },
        shippingCompany: {
          type: String,
        },
        productModel: {
          type: String,
        },
        brand: {
          type: String,
        },
        discauntPrecent: {
          type: Number,
        },
        hasDiscaunt: {
          type: Boolean,
        },
        isNewProduct: {
          type: Boolean,
        },
        stock: {
          type: Number,
        },
        numOfReviews: { type: Number, default: 0 },
      },
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Password reset Token
userSchema.methods.getResetPassowrdToken = function () {
  // generating token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
