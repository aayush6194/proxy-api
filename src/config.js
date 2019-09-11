let dotenv = require('dotenv');

dotenv.config();
const port =  Number(process.env.PORT) || 8080;

module.exports = { port };