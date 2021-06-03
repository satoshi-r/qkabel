const { Router } = require("express");
const productsController = require("../controllers/productsController");

const router = Router();

router.get("/products", productsController.get);

module.exports = router;
