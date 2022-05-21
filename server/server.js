const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const config = require('./config')
const { type } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolver');

const app = express();
const apolloServer = new ApolloServer({typeDefs: type, resolvers})

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running properly')
});

apolloServer.applyMiddleware({ app })

const port = config.port || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})