const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  elems: { type: Array }
});

module.exports = model("Popular", schema);
