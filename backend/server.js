const app = require("./app");
const cloudinary = require("./cloudinary/cloudinary");
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
