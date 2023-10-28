const userRepository = require('../repositories/user.repository');

const verifyEmail = async (req, res, next) => {

  const { email } = req.body;

  const emailExists = await userRepository.findOne('email', email);

  if(req.userLogged) {
     const userLogged = await userRepository.findByPk(req.userLogged.id);

     if(userLogged.email === email) return next();
  }
 
  if (emailExists) return res.status(409).json({error: "Já existe usuário cadastrado com o e-mail informado."}); 

  return next();

}

module.exports = verifyEmail;
