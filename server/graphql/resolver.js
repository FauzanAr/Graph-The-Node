const mongoose = require('mongoose');

const { Article, Comment } = require('../model');
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
        },
        async addComment(parent, args, context, info) {
            const { articleId, description } = args;
            const data = {                          
                _id: mongoose.Types.ObjectId(),
                description,
                createdAt: timeHelper.getTimeToday(),
                updatedAt: timeHelper.getTimeToday()
            }

            const article = await Article.findOne({ _id: articleId })

            article.comments.push(data)
            article.save();

            return article
        },
        async editArticle(parent, args, context, info) {
            const { id, title, description } = args;
            const article = await Article.findOne({_id: id})

            article.title = title;
            article.description = description;
            article.updatedAt = timeHelper.getTimeToday();

            article.save();

            return article
        },
        async editComment(parent, args, context, info) {
            const { commentId, description } = args;

            await Article.updateOne(
                {
                    "comments": { "$elemMatch": {"_id": commentId }}
                },
                {
                    "$set": {
                        "comments.$.description": description,
                        "comments.$.updatedAt": timeHelper.getTimeToday()
                    }
                }
            )

            const article = await Article.findOne({ "comments._id": commentId })

            return article
        }
    }
}

module.exports = resolvers