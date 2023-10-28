const { Router } = require("express");

const userRoutes = Router();

<<<<<<< HEAD
const { createUserController, loginController, updateUserController, getUserController } = require("../controllers/index");

const { verifyEmail, verifyEmailFormat, verifyFields, verifyEmailLogin, verifyPasswordLogin, verifyToken } = require("../middlewares/index");
=======
const { createUserController } = require("../controllers/index")

const { verifyEmail, verifyEmailFormat, verifyFields, verifyIfEmailNotExists } = require("../middlewares/index");
>>>>>>> b42208c474a7f42c43bc00c465cc99cb0be6abf1


userRoutes.post("/usuario", verifyFields, verifyEmailFormat, verifyEmail, createUserController.handle);

<<<<<<< HEAD
userRoutes.post("/login", verifyFields, verifyEmailFormat, verifyEmailLogin, verifyPasswordLogin, loginController.handle);


//rotas que para serem acessadas precisar de um token válido

userRoutes.put("/usuario", verifyToken, verifyFields, verifyEmailFormat, verifyEmail, updateUserController.handle);

userRoutes.get("/usuario", verifyToken, getUserController.handle);

=======
>>>>>>> b42208c474a7f42c43bc00c465cc99cb0be6abf1
module.exports = userRoutes;