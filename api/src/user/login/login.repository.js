const express = require("express");
const prisma = require("../../db");

const findByUsername = async (username) => {
  return prisma.user.findUnique({
    where: {
      username: username,
    },
  });
};

module.exports = {
  findByUsername,
};
