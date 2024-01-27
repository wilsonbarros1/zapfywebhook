// config/config.js
require('dotenv').config();

module.exports = {
  supabaseApiKey: process.env.SUPABASE_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
};
