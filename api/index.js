const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PostRouter = require("./routes/post.route");
const authRoute = require("./routes/auth.route");
const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "http://localhost:5173", // Set the allowed origin
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/post", PostRouter);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
