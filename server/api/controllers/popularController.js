const Popular = require("../models/Popular");

module.exports.get = async function (req, res) {
  Popular.find({}, function (err, items) {
    if (err) {
      return res.status(500).json({
        message: "Error getting catalog.",
      });
    }
    return res.status(200).json(items);
  });
};
