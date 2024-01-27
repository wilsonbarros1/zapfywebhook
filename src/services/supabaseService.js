// src/services/supabaseService.js
const axios = require('axios');

const sendToSupabase = async (data) => {
  const response = await axios.post(
    'https://cmwwoobhmdyvzyzcfacu.supabase.co/rest/v1/chatbot',
    data,
    {
      headers: {
        'apikey': process.env.SUPABASE_API_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_API_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
    }
  );

  return response;
};

module.exports = {
  sendToSupabase,
};
