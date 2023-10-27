
const verifyFields = async (req, res, next)=> {
  
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});

    return next();
  
}

module.exports = verifyFields;
