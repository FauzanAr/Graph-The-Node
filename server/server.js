const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const config = require('./config')
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolver');

const server = new ApolloServer({typeDefs, resolvers})
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running properly')
});

server.applyMiddleware({ app })

const port = config.port || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})