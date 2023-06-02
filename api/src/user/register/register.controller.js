const { findUsername } = require("./register.repository");
const userRegister = require("./register.service");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const username = await findUsername(req.body.username);

    if (username) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const register = await userRegister(req.body);

    res.send({
      data: register,
      status: 200,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
