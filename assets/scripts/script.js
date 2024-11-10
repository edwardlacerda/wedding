const express = require('express');
const mysql = require('mysql2');
const app = express();

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Função para padronizar o nome
function standadName(name) {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Endpoint para verificar se o nome está registrado
app.get('/verificar-usuario', (req, res) => {
    const stdName = standardizedName(req.query.name);

    // Consulta ao banco de dados
    db.query('SELECT * FROM guests WHERE LOWER(REPLACE(name, " ", "")) = ?', [standardizedName], (err, results) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }

        const registered = results.length > 0;
        res.json({ registered });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

