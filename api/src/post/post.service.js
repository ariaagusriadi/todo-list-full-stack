const {
  findPost,
  findPostByName,
  insertPost,
  editPost
} = require("../post/post.repository");

const getAllPost = async () => {
  return await findPost();
};

const createPost = async (newPostData) => {
  const findPost = await findPostByName(newPostData.title);

  if (findPost) {
    throw new Error("name has to be unique");
  }

  return await insertPost(newPostData);
};

const deletePost = async (id) => {
  await deletePost(id);
};

const editPostByid = async (id, body) => {
  return await editPost(id, body);
};

module.exports = {
  getAllPost,
  createPost,
  editPostByid
};
