const app = require("./app");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

const connectionToDb = require("./config/database");

// Handling Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Uncaught exceptions");
  process.exit(1);
});

// Configuration
dotenv.config({ path: "backend/.env" });

// Connection to database
connectionToDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});

// Unhandle Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
