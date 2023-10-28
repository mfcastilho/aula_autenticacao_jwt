const repository = require("../repositories/user.repository");

const getUserService = {
     async execute(id) {

          const user = await repository.findByPk(id);

          const { password, ...userLogged } = user;

          return userLogged;
     }
}

module.exports = getUserService;