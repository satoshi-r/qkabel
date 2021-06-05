const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: { type: Number },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
  },
  parentLink: { type: String },
  link: { type: String },
  name: { type: String },
  values: {
    core: { type: String },
    insulation: { type: String },
    execution: { type: String },
    protect: { type: String },
  },
  products: {
    ref: "Product",
    type: Schema.Types.ObjectId,
  },
});

module.exports = model("Group", schema);
