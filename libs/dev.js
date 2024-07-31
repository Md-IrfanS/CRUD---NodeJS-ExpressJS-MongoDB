require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    MONGOURI: process.env.MONGOURI,
    PORT: process.env.DEV_PORT
}