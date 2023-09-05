const { Pool } = require("pg");
const { config } = require("dotenv");

config();

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: 5432,
});

pool
  .on("connect", () => {
    console.log("Banco de dados conectado !!");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { query: (text, params) => pool.query(text, params) };
