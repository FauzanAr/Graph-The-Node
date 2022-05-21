const mongoose = require('mongoose');
const { Schema } = mongoose;


const CommentSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
});

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: {
        type: [CommentSchema],
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
});

const Article = mongoose.model('Articles', ArticleSchema);

module.exports = {
    Article
}
