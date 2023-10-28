
const verifyFields = async (req, res, next)=> {
<<<<<<< HEAD

    if(req.url === "/usuario") {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});
    }
  
    if(req.url === "/login") {
        const { email, password} = req.body;

        if (!email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});
    }
    
    return next();
=======
  
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({error: "Todos os campos são obrigatórios"});

    return next();
  
>>>>>>> b42208c474a7f42c43bc00c465cc99cb0be6abf1
}

module.exports = verifyFields;
