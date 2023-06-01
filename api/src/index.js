const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

const postController = require("./post/post.controller");

app.use("/posts", postController);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running https:localhost::${PORT}`);
});
