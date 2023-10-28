const express = require("express");
const app = express();

require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(userRoutes);


app.listen(port, ()=>{
     console.log(`servidor rodando na porta: ${port}`);
});