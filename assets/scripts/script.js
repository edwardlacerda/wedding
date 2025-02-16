require("dotenv").config(); 

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados.");
});

// Função para padronizar o nome
function standardizeName(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ""); // Remove espaços extras
}

// Endpoint para verificar se o nome está registrado
app.get("/verificar-usuario", (req, res) => {
  if (!req.query.name) {
    return res.status(400).json({ error: "Nome não fornecido." });
  }

  const stdName = standardizeName(req.query.name);

  // Consulta ao banco de dados
  db.query(
    'SELECT * FROM guests WHERE LOWER(REPLACE(name, " ", "")) = ?',
    [stdName],
    (err, results) => {
      if (err) {
        console.error("Erro ao consultar o banco de dados:", err);
        return res.status(500).json({ error: "Erro interno no servidor" });
      }

      const registered = results.length > 0;
      res.json({ registered });
    }
  );
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});




