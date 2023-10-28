const repository = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");


const loginService = {
     async execute(loginData) {

          const { email } = loginData;

          const user = await repository.findOne("email", email);

          const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRED_IN});

          const { password, ...userLogged } = user;

          return { user: userLogged, token };
     } 
}

module.exports = loginService;