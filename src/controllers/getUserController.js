const { getUserService: service } = require("../services");


const getUserController = {
     async handle(req, res) {

          try {
               const userId = req.userLogged.id;

               const user = await service.execute(userId);
     
               return res.status(200).json(user);

          } catch (error) {
               return  res.status(500).json({error: "Erro interno do servidor."});
          }
     }
}

module.exports = getUserController;