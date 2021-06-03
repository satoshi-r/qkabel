const parser = require("../../parser");

module.exports.get = async function (req, res) {
  const products = await parser.getProducts(req.query.id, req.query.group_id);
  res.status(200).json(products);
};
