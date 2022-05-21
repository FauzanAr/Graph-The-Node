const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Comment {
        _id: String,
        description: String,
        createdAt: Float,
        updatedAt: Float
    }

    type Article {
        _id: String,
        title: String,
        description: String,
        comments: [Comment],
        createdAt: Float,
        updatedAt: Float
    }

    type Query {
        articles: [Article],
        article (id: String): Article,
        comments (articleId: String): [Comment]
        comment (id: String): Comment
    }

    type Mutation {
        addArticles (title: String, description: String): Article
    }
`

module.exports = typeDefs;