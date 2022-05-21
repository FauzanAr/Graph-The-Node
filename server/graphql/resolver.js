const { v4: uuid } = require('uuid');

const timeHelper = require('../helper/time');

const resolvers = {
    Query: {
        articles(parent, args, context, info) {

        }
    }
}

module.exports = resolvers