const mongoose = require("mongoose");
const config = require("./config");

const db_setup = (server) => {
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;

  db.on("error", (err) => console.log(err));

  db.once("open", () => {
    require("../routes/customers")(server);
    require("../routes/users")(server);
    console.log("Connected to MongoDB");
  });
};

module.exports = db_setup;
