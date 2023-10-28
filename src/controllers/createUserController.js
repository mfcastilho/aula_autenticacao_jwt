const { createUserService: service } = require("../services/index");

const createUserController = {
     async handle(req, res) {

          try {

               const { name, email, password } = req.body;

               const userCreated = await service.execute({ name, email, password });
               
               return res.status(201).json(userCreated);

          } catch (error) {
<<<<<<< HEAD
               return res.status(500).json({error: "Erro interno do servidor."});
=======
               console.log(error);
               return res.status(500).json({error: "Erro interno do servidor."})
>>>>>>> b42208c474a7f42c43bc00c465cc99cb0be6abf1
          }
     }
}

module.exports = createUserController;