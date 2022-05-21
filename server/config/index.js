require('dotenv').config();

const config = {
    port: process.env.PORT,
    mongoDb: {
        url: process.env.MONGODB_URL,
        collectionName: process.env.COLLECTION_NAME,
    }
}

module.exports = config;