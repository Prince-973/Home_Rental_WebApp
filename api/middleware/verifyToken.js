const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Not Authentivated!",
    });
  }
  jwt.verify(token, process.env.JWT_SECERT, async (err, payload) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid Token",
      });
    }
    req.userId = payload.id;
    next();
  });
};

module.exports = {
  verifyToken,
};
