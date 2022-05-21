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
        },
        article(parent, args, context, info) {
            return Article.findOne({ _id: args.id })
                .then(res => {
                    console.log('Found Article');
                    return res
                })
                .catch(err => {
                    console.log('Found error on article resolvers: ', err);
                    return null;
                })
        },
        comments(parent, args, context, info) {
            return Article.findOne({ _id: args.articleId })
                .then(res => {
                    console.log('Found Article Comments');
                    return res.comments;
                })
                .catch(err => {
                    console.log('Found error on comments resolvers: ', err);
                    return null;
                })
        },
        comment(parent, args, context, info) {
            return Article.findOne({ "comments._id": args.id })
                .then(res => {
                    console.log('Found Article Comment');
                    
                    if(res) {
                        res = res.comments.length > 0 ?
                            res.comments.find(el => el._id == args.id) :
                            null
                    }

                    return res
                })
                .catch(err => {
                    console.log('Found error on comment resolvers: ', err);
                    return null;
                })
        }
    },
    Mutation: {
        addArticles(parent, args, context, info) {
            const { title, description } = args;
            const article = new Article({
                title,
                description,
                createdAt: timeHelper.getTimeToday(),
                updatedAt: timeHelper.getTimeToday()
            });

            return article.save()
                .then(res => {
                    console.log('saved article');
                    return res
                })
                .catch(err => {
                    console.log('Found error on addArticles resolvers: ', err);
                    return null;
                })
        }
    }
}

module.exports = resolvers