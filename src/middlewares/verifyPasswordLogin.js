const repository = require('../repositories/user.repository');
const bcrypt = require("bcrypt");

const verifyPasswordLogin = async (req, res, next)=>{

     const { email, password } = req.body;

     const user = await repository.findOne("email", email);

     const cryptedPassword = user.password; 

     const passwordIsValid = await bcrypt.compare(password, cryptedPassword);

     if(!passwordIsValid) return res.status(401).json({error: "Email e/ou senha incorretos."});

     return next();
}

module.exports = verifyPasswordLogin;