const parser = require("../../parser");

module.exports.get = async function (req, res) {
  const popular = await parser.getPopular();
  res.status(200).json(popular);
};
