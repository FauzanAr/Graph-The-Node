const { v4: uuid } = require('uuid');

const { Article } = require('../model');
const timeHelper = require('../helper/time');

const resolvers = {
    Query: {
        articles(parent, args, context, info) {
            return Article.find()
                .then(res => {
                    console.log('Found articles');
                    return res
                })
                .catch(err => {
                    console.log('Found error on articles resolvers: ', err);
                    return null;
                })
        }
    }
}

module.exports = resolvers