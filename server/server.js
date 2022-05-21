const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const config = require('./config')
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

const port = config.port || 5000;
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    playground: {
        endpoint: `http://localhost:${port}/graphql`,
        settings: {
            'editor.theme': 'light'
        }
    }
});
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running properly')
});

server.applyMiddleware({ app });

mongoose
    .connect(config.mongoDb.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => {
        console.error('Error while connect to db', err)
    })