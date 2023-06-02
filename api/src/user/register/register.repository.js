const prisma = require("../../db");
const bcrypt = require("bcrypt");

const findUsername = async (username) => {
  return await prisma.user.findFirst({
    where: {
      username,
    },
  });
};

const registerInsert = async (data) => {
  const passwordBcyrpt = await bcrypt.hash(data.password, 10);
  var datetime = new Date();

  return await prisma.user.create({
    data: {
      username: data.username,
      password: passwordBcyrpt,
      email: data.email,
      createdAt: datetime,
      updatedAt: datetime,
    },
  });
};

module.exports = {
  findUsername,
  registerInsert,
};
