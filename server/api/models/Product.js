const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  exist: {
    type: Number,
  },
  price: {
    type: String,
  },
  info: {
    characteristics: {
      core_length: { type: Number },
      veins_section: { type: Number },
      voltage: { type: Number },
      screen_section: { type: Number },
    },

    description: { type: String },
  },
});

module.exports = model("Product", schema);
