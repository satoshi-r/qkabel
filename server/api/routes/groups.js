const { Router } = require("express");
const groupsController = require("../controllers/groupsController");

const router = Router();

router.get("/groups", groupsController.get);

module.exports = router;
