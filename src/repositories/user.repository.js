const connection = require("../configs/connection/index");

const userRepository = {

     findByPk: async (id)=>{

          const sql = `SELECT id, name, email FROM users WHERE id = $1;`;
  
          const client = await connection.query(sql, [id]);
  
          return client.rows[0];
      },
       
      findOne: (field, value)=>{
  
          const sql = `SELECT * FROM users WHERE ${field} = $1;`;
  
          const client = connection.query(sql, [value]);
  
          return client.rows[0];
      },
  
      create: async (data)=>{
  
          const { name, email, password } = data;
  
          const sql = `
              INSERT INTO usuarios
                  (name, email, password)
              VALUES
                  ($1, $2, $3) returning *;
          `;
  
          const clientCreated = await connection.query(sql, [name, email, cryptedPassword]);
  
          return clientCreated.rows[0];
      },
  
      update: async (data, id)=>{
          const { name, email, password } = data;
  
          const sql = `
              UPDATE usuarios
              SET 
                  name = $1, 
                  email = $2, 
                  password = $3
              WHERE id = $4 
              RETURNING *;
          `;
  
          const clientUpdated = await connection.query(sql, [name, email, password, id]);
  
          return clientUpdated.rows[0];
      }
}

module.exports = userRepository;