
const verifyFields = async (req, res, next)=> {

    if(req.url === "/usuario") {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});
    }
  
    if(req.url === "/login") {
        const { email, password} = req.body;

        if (!email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});
    }
    
    return next();
}

module.exports = verifyFields;
