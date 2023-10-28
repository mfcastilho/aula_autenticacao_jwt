const repository = require("../repositories/user.repository");

const bcrypt = require("bcrypt");

const createUserService = {
     async execute(userData) {

          const cryptedPassword = await bcrypt.hash(userData.password, 10);

          userData.password = cryptedPassword;

          const userRegistered = await repository.create(userData);

          const { password, ...userCreated } = userRegistered;

          return userCreated;
     }
}

module.exports = createUserService;