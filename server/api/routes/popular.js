const { Router } = require("express");
const popularController = require("../controllers/popularController");

const router = Router();

router.get("/popular", popularController.get);

module.exports = router;
