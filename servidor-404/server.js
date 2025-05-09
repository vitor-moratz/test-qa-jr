const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Você pode escolher outra porta

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para a página inicial (exemplo, serve seu index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware para tratar erros 404 (deve vir por último)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'front', '404.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});