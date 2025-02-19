const bcrypt = require("bcrypt");
const prisma = require("../lib/prisma");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return res.status(200).json({
      message: "User created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
const login = async (req, res) => {
  const { username, password: pass } = req.body;
  try {
    //If user existe
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentail",
      });
    }
    //check if the password is correct
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid Credentail",
      });
    }
    const { password, ...userInfo } = user;
    //generate Cokkie tokrn and send to the user
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECERT,
      {
        expiresIn: age,
      }
    );

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json({
        message: "User login Successfully",
        userInfo,
      });
  } catch (error) {
    res.status(500).json({
      message: "Error login user",
      error: error.message,
    });
  }
};
const logout = async (req, res) => {
  return res.clearCookie("token").status(200).json({
    message: "User Logout Successfully",
  });
};

module.exports = {
  register,
  login,
  logout,
};
