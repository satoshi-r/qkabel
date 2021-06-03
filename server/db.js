const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/qkabel?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("MongoDB Connected..."));

module.exports = db;
