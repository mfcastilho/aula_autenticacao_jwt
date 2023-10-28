const userRepository = require('../repositories/user.repository');

const verifyEmail = async (req, res, next) => {

  const { email } = req.body;

  const emailExists = await userRepository.findOne('email', email);
<<<<<<< HEAD

  if(req.userLogged) {
     const userLogged = await userRepository.findByPk(req.userLogged.id);

     if(userLogged.email === email) return next();
  }
=======
>>>>>>> b42208c474a7f42c43bc00c465cc99cb0be6abf1
 
  if (emailExists) return res.status(409).json({error: "Já existe usuário cadastrado com o e-mail informado."}); 

  return next();

}

module.exports = verifyEmail;
