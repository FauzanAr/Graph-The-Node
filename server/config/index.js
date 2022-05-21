require('dotenv').config();

const config = {
    port: process.env.PORT,
    mongoDb: {
        url: process.env.MONGODB_URL,
    }
}

module.exports = config;