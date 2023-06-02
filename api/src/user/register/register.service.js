const { registerInsert } = require("./register.repository");

const userRegister = async (data) => {
  return await registerInsert(data);
};

module.exports = userRegister;
