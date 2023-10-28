const { Router } = require("express");

const userRoutes = Router();

const { createUserController, loginController, updateUserController, getUserController } = require("../controllers/index");

const { verifyEmail, verifyEmailFormat, verifyFields, verifyEmailLogin, verifyPasswordLogin, verifyToken } = require("../middlewares/index");


userRoutes.post("/usuario", verifyFields, verifyEmailFormat, verifyEmail, createUserController.handle);

userRoutes.post("/login", verifyFields, verifyEmailFormat, verifyEmailLogin, verifyPasswordLogin, loginController.handle);


//rotas que para serem acessadas precisar de um token válido

userRoutes.put("/usuario", verifyToken, verifyFields, verifyEmailFormat, verifyEmail, updateUserController.handle);

userRoutes.get("/usuario", verifyToken, getUserController.handle);

module.exports = userRoutes;