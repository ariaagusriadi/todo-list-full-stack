const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

const postController = require("./post/post.controller");
const registerController = require("./user/register/register.controller");
const loginController = require("./user/login/login.controller");
// const {verifyToken} = require("./user/middleware/verifyToken");

app.use("/posts", postController);
app.use("/register", registerController);
app.use("/login", loginController);



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running https:localhost::${PORT}`);
});
