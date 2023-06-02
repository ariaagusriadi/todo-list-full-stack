const bcrypt = require("bcrypt");
const { findByUsername } = require("./login.repository");

const login = async (username, password) => {
  const user = await findByUsername(username);

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Invalid username or password");
  }

  return user;
};

module.exports = {
  login,
};
