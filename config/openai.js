// config/openai.js
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
console.log('test over here')
module.exports = openai;
