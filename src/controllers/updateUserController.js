const { upatedUserService: service } = require("../services");

const updateUserController = {
     async handle(req, res) {

          try {

               const { name, email, password } = req.body;
               
               const userId = req.userLogged.id;

               const userUpdated = await service.execute({ name, email, password }, userId);

               return res.status(201).json(userUpdated);
     
          } catch (error) {
               console.log(error);
               return res.status(500).json({error: "Erro interno do servidor."});
          }
     }
}

module.exports = updateUserController;