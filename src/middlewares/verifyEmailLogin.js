const userRepository = require('../repositories/user.repository');

const verifyEmailLogin = async (req, res, next) => {

  const { email } = req.body;

  const queryResult = await userRepository.findOne('email', email);

  const emailExists = queryResult;

  if (!emailExists) return res.status(401).json({error: "Email e/ou senha incorretos."});

  return next();

}

module.exports = verifyEmailLogin;
