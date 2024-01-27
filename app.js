// src/app.js
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/webhook');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware para processar dados JSON no corpo da requisição
app.use(express.json());

// Configurações de segurança no Express
app.use(helmet());

// Rotas
app.use('/', routes);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3387;
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
