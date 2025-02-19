const jwt = require("jsonwebtoken");

const shouldBeLoggedIn = async (req, res) => {
  return res.status(200).json({
    message: "You are Authenticated",
  });
};

const shouldBeAdmin = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Not Authentivated!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid Token",
      });
    }
    if (!payload.isAdmin) {
      return res.status(403).json({
        message: "Not Authorized",
      });
    }
  });
  return res.status(200).json({
    message: "You are Authenticated",
  });
};

module.exports = {
  shouldBeLoggedIn,
  shouldBeAdmin,
};
