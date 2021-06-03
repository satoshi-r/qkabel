const { Router } = require("express");
const catalogController = require("../controllers/catalogController");

const router = Router();

router.get("/catalog", catalogController.get);

module.exports = router;