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
  },
  groups: {
    ref: 'groups',
    type: Schema.Types.ObjectId
  }
});

module.exports = model("Catalog", schema);
