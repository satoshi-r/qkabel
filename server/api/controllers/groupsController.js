const Catalog = require("../models/Catalog");
const Group = require("../models/Group");

module.exports.get = async function (req, res) {
  const category = await Catalog.findOne({link: `/store/${req.query.link}/`});

  Group.find({parentLink: `/store/${req.query.link}/`}, function (err, items) {
    if (err) {
      return res.status(500).json({
        message: "Error getting groups.",
      });
    }
    return res.status(200).json([category?.title, items]);
  });
};
