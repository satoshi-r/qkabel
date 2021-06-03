const parser = require("../../parser");

module.exports.get = async function (req, res) {
  const groups = await parser.getGroups(req.query.id);
  res.status(200).json(groups);
};
