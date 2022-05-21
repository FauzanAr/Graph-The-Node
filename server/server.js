const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const config = require('./config')
const graphQlSchema = require('./graphql/schema');
const graphQlResolver = require('./graphql/resolver');

const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolver,
        graphiql: true,
        customFormatErrorFn(err) {
            if(!err.originalError) {
                return err
            }

            const data = err.originalError.data;
            const message = err.originalError.message || 'Oops, something went wrong!';
            const status = err.originalError.code || 500;

            return {message, status, data}
        }
    })
)

app.get('/', (req, res) => {
    res.send('Server running properly')
});

const port = config.port || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})