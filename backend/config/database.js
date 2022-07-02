const mongoose = require("mongoose");

const connectionToDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((response) =>
      console.log(
        `DB connection is successfully established: ${response.connection.host}`
      )
    );
};

module.exports = connectionToDb;
