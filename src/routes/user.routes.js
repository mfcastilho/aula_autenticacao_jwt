const { Router } = require("express");

const userRoutes = Router();

const { createUserController } = require("../controllers/index")

const { verifyEmail, verifyEmailFormat, verifyFields, verifyIfEmailNotExists } = require("../middlewares/index");


userRoutes.post("/usuario", verifyFields, verifyEmailFormat, verifyEmail, createUserController.handle);

module.exports = userRoutes;