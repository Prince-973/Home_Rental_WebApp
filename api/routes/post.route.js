const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "test message",
  });
});

router.post("/test", (req, res) => {
  res.json({
    message: "test message",
  });
});

router.patch("/test", (req, res) => {
  res.json({
    message: "test message",
  });
});
router.delete("/test", (req, res) => {
  res.json({
    message: "test message",
  });
});
module.exports = router;
