require("dotenv").config();

const express = require("express");
const { Client } = require("pg"); // Importando o Client do PostgreSQL
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Usando a variável de ambiente para conexão
  ssl: {
    rejectUnauthorized: false // Certifique-se de que a conexão SSL está configurada corretamente
  }
});

client.connect((err) => {
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

  // Consulta ao banco de dados PostgreSQL
  client.query(
    'SELECT * FROM guests WHERE LOWER(REPLACE(name, " ", "")) = $1',
    [stdName],
    (err, results) => {
      if (err) {
        console.error("Erro ao consultar o banco de dados:", err);
        return res.status(500).json({ error: "Erro interno no servidor" });
      }

      const registered = results.rows.length > 0;
      res.json({ registered });
    }
  );
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});