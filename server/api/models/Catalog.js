const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  }
});

module.exports = model("Catalog", schema);
