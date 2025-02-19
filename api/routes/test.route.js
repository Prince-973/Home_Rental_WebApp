const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { shouldBeLoggedIn } = require("../controller/test.controller");
const router = express.Router();

router.get("/test", verifyToken, shouldBeLoggedIn);

module.exports = router;
