const app = require("./app");
const dotenv = require("dotenv");

const connectionToDb = require("./config/database");

// Configuration
dotenv.config({ path: "backend/.env" });

// Connection to database
connectionToDb();

app.listen(process.env.PORT, () => {
  console.log("server listening on port " + process.env.PORT);
});
