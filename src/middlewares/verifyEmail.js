const userRepository = require('../repositories/user.repository');

const verifyEmail = async (req, res, next) => {

  const { email } = req.body;

  const emailExists = await userRepository.findOne('email', email);
 
  if (emailExists) return res.status(409).json({error: "Já existe usuário cadastrado com o e-mail informado."}); 

  return next();

}

module.exports = verifyEmail;
