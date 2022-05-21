const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const config = require('./config')
const { graphQlSchema } = require('./graphql/schema');
const { graphQlResolver } = require('./graphql/resolver');

const app = express();
const apolloServer = new ApolloServer({graphQlSchema, graphQlResolver})

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running properly')
});

apolloServer.applyMiddleware({ app })

const port = config.port || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})