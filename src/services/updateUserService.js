const repository = require("../repositories/user.repository");
const bcrypt = require("bcrypt");

const updateUserService = {
     async execute(userData, id) {

          const { name, email, password } = userData;

          const user =  await repository.findByPk(id);
          
          if(name) user.name = name;
          
          if(email) user.email = email;

          if(password) {
               const cryptedPassword = await bcrypt.hash(userData.password, 10);

               user.password = cryptedPassword;
          }

          const userEdited = await repository.update(user, id);

          delete userEdited.password;

          return userEdited;

     }
}


module.exports = updateUserService;