
 const User = require("../models/userModel");
const Product = require("../models/porductModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsynErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

// Register a User==========================
exports.registerUser = catchAsyncError(async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(
      req.body.avatar,
      {
        folder: "avatars",
        width: 150,
        crop: "scale",
      },
      function (err, result) {
        console.log(err);
      }
    );

    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    sendToken(user, 201, res, "User Signed Up successfully");
  } catch (error) {
    console.log(error);
  }
});
// ==========================================
// Login User================================
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Place Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid Email or Password", 401));

  const isPassowrdMatched = await user.comparePassword(password);

  if (!isPassowrdMatched)
    return next(new ErrorHandler("Invalid Email or Password", 401));

  sendToken(user, 200, res, "User Signed In successfully");
});
// ==========================================
// Log Out===================================
exports.logOut = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});
// ==========================================
// Forgot Password===========================
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new ErrorHandler("User not found", 404));

  // Get ResetPassword Token
  const resetToken = user.getResetPassowrdToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you haven't requested this email then, please ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommere Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});
// ==========================================
// Reset Password============================
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user)
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );

  if (req.body.password !== req.body.confirmPassword)
    return next(
      new ErrorHandler("Password does not match confirm Password", 400)
    );

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res, "Password has been reset & updated successfully");
});
// ==========================================
// Get user details==========================
exports.getMyDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({ success: true, user });
});
// ==========================================
// Set user Banner===========================
exports.setUserBanner = catchAsyncError(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.user_banner, {
    folder: "user_banners",
    width: 1500,
    height: 300,
    crop: "scale",
  });

  const newUserData = {
    user_banner: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, user });
});
// ==========================================
// Update user banner========================
exports.updateUserBanner = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (req.body.user_banner !== "") {
    const avatarImageId = user.user_banner.public_id;
    await cloudinary.v2.uploader.destroy(avatarImageId);

    const myCloud = await cloudinary.v2.uploader.upload(
      req.body.user_banner,
      {
        folder: "user_banners",
        width: 1500,
        crop: "scale",
      },
      function (err, result) {
        console.log(err);
      }
    );

    user.user_banner = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  await User.findByIdAndUpdate(req.user.id, user, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
    message: "Banner Updated Successfuly",
  });
});
// ==========================================
// Update User Password======================
exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPassowrdMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPassowrdMatched)
    return next(new ErrorHandler("Old Password is incorrect"), 400);

  if (req.body.password !== req.body.confirmPassword)
    return next(new ErrorHandler("Password does not match"), 400);

  user.password = req.body.password;

  await user.save();

  sendToken(user, 200, res, "Password updated successfully");
});
// ==========================================
// Update User Password======================
exports.updateProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== user.avatar.url) {
    const avatarImageId = user.avatar.public_id;
    await cloudinary.v2.uploader.destroy(avatarImageId);

    const myCloud = await cloudinary.v2.uploader.upload(
      req.body.avatar,
      {
        folder: "avatars",
        width: 150,
        crop: "scale",
      },
      function (err, result) {
        console.log(err);
      }
    );

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user: updatedUser,
    message: "User Updated Successfuly",
  });
});
// ==========================================
// Get all users = Access for ADMIN==========
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, users });
});
// ==========================================
// Get a user details = Access for ADMIN=====
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User Does Not Exist with id ${req.params.id}`),
      400
    );

  res.status(200).json({ success: true, user });
});
// ==========================================
// Update User Role = Access for ADMIN=======
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true });
});
// ==========================================
// Delete User = Access for ADMIN============
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  // we will remove cloudinary later

  const user = await User.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User Does Not Exist with id ${req.params.id}`),
      400
    );

  await user.remove();

  res.status(200).json({ success: true, message: "User deleted successfully" });
});
// ==========================================
// User Viewed List==========================
exports.addToUserViewedLaterList = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const product = await Product.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User Does Not Exist with id ${req.user.id}`),
      400
    );

  if (!product)
    return next(
      new ErrorHandler(`Product Does Not Exist with id ${req.params.id}`),
      400
    );

  const existedProductInViewLaterList = user.userViewedLaterList.find(
    (userVieweLaterproduct) =>
      String(userVieweLaterproduct._id) === String(product._id)
  );

  if (existedProductInViewLaterList) {
    res.status(208).json({ message: "Product already exists" });
    return;
  }

  user.userViewedLaterList.push(product);
  user.save();

  res
    .status(200)
    .json({ success: true, message: "Product Added To See Later List" });
});
// ==========================================
// Get User Viewed-Later List================
exports.getUserViewedLaterList = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user)
    return next(new ErrorHandler(`User Does Not Authentificated`), 400);

  const userViewedLaterList = user.userViewedLaterList;

  res.status(200).json({ success: true, userViewedLaterList });
});
// ==========================================
// Delete Viewed Later Product===============
exports.deleteProductFromViewedLaterList = catchAsyncError(
  async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const product = await Product.findById(req.params.id);

    if (!user)
      return next(
        new ErrorHandler(`User Does Not Exist with id ${req.user.id}`),
        400
      );

    if (!product)
      return next(
        new ErrorHandler(`Product Does Not Exist with id ${req.params.id}`),
        400
      );

    user.userViewedLaterList = user.userViewedLaterList.filter(
      (userVieweLaterproduct) =>
        String(userVieweLaterproduct._id) !== String(product._id)
    );
    user.save();

    res
      .status(200)
      .json({ success: true, message: "Product removed from See Later List" });
  }
);
// ==========================================
// Add to Favourite List==========================
exports.addToFavouriteList = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const product = await Product.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User Does Not Exist with id ${req.user.id}`),
      400
    );

  if (!product)
    return next(
      new ErrorHandler(`Product Does Not Exist with id ${req.params.id}`),
      400
    );

  const existedProductFavouriteList = user.userFavouriteProductsList.find(
    (userFavouriteProduct) =>
      String(userFavouriteProduct._id) === String(product._id)
  );

  if (existedProductFavouriteList) {
    res.status(208).json({ message: "Product already exists in Favourites" });
    return;
  }

  user.userFavouriteProductsList.push(product);
  user.save();

  res
    .status(200)
    .json({ success: true, message: "Product Added To Favourites" });
});
// ==========================================
// Get User Favourite List===================
exports.getUserFavouriteProductsList = catchAsyncError(
  async (req, res, next) => {
    const user = await User.findById(req.user.id);

    if (!user)
      return next(new ErrorHandler(`User Does Not Authentificated`), 400);

    const userFavouriteProductsList = user.userFavouriteProductsList;

    res.status(200).json({ success: true, userFavouriteProductsList });
  }
);
// ==========================================
// Delete Favourite Product==================
exports.deleteProductFromFavouriteList = catchAsyncError(
  async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const product = await Product.findById(req.params.id);

    if (!user)
      return next(
        new ErrorHandler(`User Does Not Exist with id ${req.user.id}`),
        400
      );

    if (!product)
      return next(
        new ErrorHandler(`Product Does Not Exist with id ${req.params.id}`),
        400
      );

    user.userFavouriteProductsList = user.userFavouriteProductsList.filter(
      (userFavouriteProduct) =>
        String(userFavouriteProduct._id) !== String(product._id)
    );
    user.save();

    res.status(200).json({
      success: true,
      message: "Favourite Product deleted successfully",
    });
  }
);
