const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { login } = require("./login.service");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await login(username, password);

    const token = jwt.sign({ username: user.username }, "secret-key", {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
