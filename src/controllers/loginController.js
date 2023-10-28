const { loginService: service } = require("../services");

const loginController = {
     async handle(req, res) {

          try {

               const { email, password } = req.body;

               const userLogged = await service.execute({ email, password });

               return res.status(200).json(userLogged);
               
          } catch (error) {
               console.log(error);
               return res.status(500).json({error: "Erro interno do servidor."});
          }
     }
}

module.exports = loginController;