const prisma = require("../db");

const findPost = async () => {
  return await prisma.post.findMany();
};

const findPostByName = async (title) => {
  return (post = await prisma.post.findFirst({
    where: {
      title,
    },
  }));
};

const insertPost = async (newPostData) => {
  var datetime = new Date();
  return (post = await prisma.post.create({
    data: {
      title: newPostData.title,
      body: newPostData.body,
      createdAt: datetime,
      updatedAt: datetime,
    },
  }));
};

const deletePost = async (id) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
};

const editPost = async (id, body) => {
  var datetime = new Date();
  return prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: body.title,
      body: body.body,
      updatedAt: datetime,
    },
  });
};

module.exports = {
  findPost,
  insertPost,
  findPostByName,
  deletePost,
  editPost
};
