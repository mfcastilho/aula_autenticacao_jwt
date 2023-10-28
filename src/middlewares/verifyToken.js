const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{

     try {
          const auth = req.headers.authorization;
          console.log(auth);

          if(!auth) return res.status(401).json({error: "Para acesar este recurso um token de autenticação válido deve ser enviado."});

          
          const token = auth.split(" ")[1];
          
          const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

          req.userLogged = decoded; 

          return next();
          
     } catch (error) {
          return res.status(401).json({error: "Para acesar este recurso um token de autenticação válido deve ser enviado."});
     }
}

module.exports = verifyToken;