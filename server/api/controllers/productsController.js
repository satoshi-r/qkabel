const Group = require("../models/Group");
const Product = require("../models/Product");

module.exports.get = async function (req, res) {
  const group = await Group.findOne({link: `/store/${req.query.link}/`});

  Product.find({parentLink: `/store/${req.query.link}/`}, function (err, items) {
    if (err) {
      return res.status(500).json({
        message: "Error getting groups.",
      });
    }
    return res.status(200).json([group?.title, items]);
  });
};
