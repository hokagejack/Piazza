const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Fixed typo
        min: 1,
        max: 100
    },
    description: {
        type: String,
        required: true, // Fixed typo
        min: 3,
        max: 500
    },
    likes: {
        type: Number,
        default: 0
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Post', postSchema); // Changed 'posts' to 'Post'
