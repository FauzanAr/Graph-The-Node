const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Article {
        _id: String,
        title: String,
        description: String,
        comments: [Comment],
        createdAt: Int,
        updatedAt: Int
    }

    type Comment {
        _id: String,
        description: String,
        createdAt: Int,
        updatedAt: Int
    }

    type Query {
        articles: [Article],
        article (id: String): Article,
        comment (id: String): Comment
    }
`

module.exports = typeDefs;