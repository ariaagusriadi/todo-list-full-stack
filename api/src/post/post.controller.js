const express = require("express");
const { getAllPost, createPost, editPostByid } = require("./post.service");
const { deletePost } = require("./post.repository");
const verifyToken = require("../user/middleware/verifyToken");
const router = express.Router();



router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await getAllPost();
    res.send({
      data: posts,
      status: 200,
      message: "success data",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = req.body;
    const post = await createPost(newPost);
    res.send({
      data: post,
      status: 200,
      message: "success data",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    await deletePost(postId);

    res.send({
      status: 200,
      message: "delete post success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = req.body;

    if (!(postData.title && postData.body)) {
      res.status(400).send("some field are missing");
      return;
    }

    const post = await editPostByid(postId, postData);

    res.send({
      data: post,
      status: 200,
      message: "edit data success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = req.body;

    const post = await editPostByid(postId, postData);

    res.send({
      data: post,
      status: 200,
      message: "edit data success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
