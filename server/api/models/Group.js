const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: { type: Number },
  link: { type: String },
  name: { type: String },
  values: {
    core: { type: String },
    insulation: { type: String },
    execution: { type: String },
    protect: { type: String },
  },
  products: {
    ref: "products",
    type: Schema.Types.ObjectId
  }
});

module.exports = model("Group", schema);
