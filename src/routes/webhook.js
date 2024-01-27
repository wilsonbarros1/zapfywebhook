// src/routes/webhook.js
const express = require('express');
const webhookController = require('../controllers/webhookController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();

router.post('/webhook', authenticationMiddleware, webhookController.handleWebhook);

module.exports = router;
