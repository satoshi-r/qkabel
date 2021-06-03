const Catalog = require("../models/Catalog");

module.exports.get = function (req, res) {
   Catalog.find({}, function (err, items) {
     if (err) {
       return res.status(500).json({
         message: "Error getting catalog.",
       });
     }
     return res.status(200).json(items);
   });
};
