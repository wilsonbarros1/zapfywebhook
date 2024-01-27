// src/controllers/webhookController.js
const { validationResult } = require('express-validator');
const supabaseService = require('../services/supabaseService');

const handleWebhook = async (req, res) => {
  try {
    // Validação de Entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Lógica do Webhook
    const body = req.body;
    console.log('Recebeu requisição do webhook:', body);

    // Envie uma resposta de sucesso
    res.status(200).send('OK');

    // Adicione os dados necessários ao objeto JSON
    const jsonToSend = {
      "text_simples": body.message,
    };

    // Faça a solicitação HTTP para a URL do Supabase
    const response = await supabaseService.sendToSupabase(jsonToSend);
    console.log('Resposta do Supabase:', response.data);
  } catch (error) {
    console.error('Erro ao processar o webhook:', error.message);
    res.status(500).send('Erro interno do servidor');
  }
};

module.exports = {
  handleWebhook,
};
